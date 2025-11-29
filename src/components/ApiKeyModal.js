/**
 * API Key Modal Component
 * Handles API key configuration and storage
 */

const API_KEY_STORAGE_KEY = 'gemini_api_key';

export class ApiKeyModal {
    constructor() {
        this.modal = document.getElementById('apiKeyModal');
        this.input = document.getElementById('apiKeyInput');
        this.errorDiv = document.getElementById('apiKeyError');
        this.successDiv = document.getElementById('apiKeySuccess');
        this.banner = document.getElementById('apiKeyBanner');
    }

    /**
     * Open the modal
     */
    open() {
        this.modal.classList.remove('hidden');
        this.input.value = this.getApiKey() || '';
        this.clearMessages();
        this.input.focus();
    }

    /**
     * Close the modal
     */
    close() {
        this.modal.classList.add('hidden');
        this.clearMessages();
    }

    /**
     * Save API key to localStorage
     */
    async save() {
        const apiKey = this.input.value.trim();

        if (!apiKey) {
            this.showError('Please enter an API key');
            return false;
        }

        // Basic validation
        if (apiKey.length < 20) {
            this.showError('API key appears to be invalid (too short)');
            return false;
        }

        try {
            // Test the API key
            this.showSuccess('Testing API key...');

            // Import the converter
            const { testApiKey } = await import('../converter/geminiConverter.js');
            const isValid = await testApiKey(apiKey);

            if (isValid) {
                localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
                this.showSuccess('✅ API key saved successfully!');
                this.updateBanner();

                setTimeout(() => {
                    this.close();
                }, 1500);

                return true;
            } else {
                this.showError('Invalid API key. Please check and try again.');
                return false;
            }
        } catch (error) {
            this.showError(`Error testing API key: ${error.message}`);
            return false;
        }
    }

    /**
     * Get API key from localStorage
     */
    getApiKey() {
        return localStorage.getItem(API_KEY_STORAGE_KEY) || import.meta.env.VITE_GEMINI_API_KEY;
    }

    /**
     * Check if API key is configured
     */
    hasApiKey() {
        const key = this.getApiKey();
        return key && key.length > 0;
    }

    /**
     * Remove API key from localStorage
     */
    removeApiKey() {
        localStorage.removeItem(API_KEY_STORAGE_KEY);
        this.updateBanner();
    }

    /**
     * Show error message
     */
    showError(message) {
        this.errorDiv.textContent = message;
        this.errorDiv.classList.remove('hidden');
        this.successDiv.classList.add('hidden');
    }

    /**
     * Show success message
     */
    showSuccess(message) {
        this.successDiv.textContent = message;
        this.successDiv.classList.remove('hidden');
        this.errorDiv.classList.add('hidden');
    }

    /**
     * Clear messages
     */
    clearMessages() {
        this.errorDiv.classList.add('hidden');
        this.successDiv.classList.add('hidden');
    }

    /**
     * Update banner visibility
     */
    updateBanner() {
        if (this.hasApiKey()) {
            this.banner.classList.add('hidden');
        } else {
            this.banner.classList.remove('hidden');
        }
    }

    /**
     * Initialize event listeners
     */
    init() {
        // Close modal on overlay click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Submit on Enter key
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.save();
            }
        });

        // Update banner on init
        this.updateBanner();
    }
}
