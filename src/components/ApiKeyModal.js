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
        // Aggressively clean the API key - remove ALL whitespace including invisible characters
        const apiKey = this.input.value
            .replace(/\s/g, '') // Remove all whitespace
            .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
            .trim();

        if (!apiKey) {
            this.showError('Please enter an API key');
            return false;
        }

        // Basic validation - Gemini keys typically start with 'AIza' and are 39 chars
        if (apiKey.length < 20) {
            this.showError('API key appears to be invalid (too short)');
            return false;
        }

        // Check if it looks like a Gemini API key
        if (!apiKey.startsWith('AIza')) {
            this.showError('API key should start with "AIza". Please check your key.');
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
            console.error('API key validation error:', error);
            const errMsg = error.message || String(error);
            let errorMessage = '';
            
            // Check for specific API errors in the message
            if (errMsg.includes('API key not valid') || errMsg.includes('API_KEY_INVALID')) {
                errorMessage = 'Invalid API key. Please verify you copied the entire key from Google AI Studio.';
            } else if (errMsg.includes('PERMISSION_DENIED') || errMsg.includes('403')) {
                errorMessage = 'Permission denied. The API key may not have access to the Gemini API.';
            } else if (errMsg.includes('QUOTA_EXCEEDED') || errMsg.includes('429')) {
                errorMessage = 'API quota exceeded. Please try again later.';
            } else if (errMsg.includes('fetch') || errMsg.includes('network') || errMsg.includes('Failed to fetch')) {
                errorMessage = 'Network error. Please check your internet connection and try again.';
            } else if (errMsg.includes('timeout')) {
                errorMessage = 'Request timed out. Please try again.';
            } else {
                // Show the actual error for debugging
                errorMessage = errMsg.length > 150 ? errMsg.substring(0, 150) + '...' : errMsg;
            }
            
            this.showError(errorMessage);
            return false;
        }
    }

    /**
     * Get API key - prioritize runtime config, then localStorage
     */
    getApiKey() {
        // 1. First check runtime config (from config.js - injected at deployment)
        if (window.APP_CONFIG?.GEMINI_API_KEY && window.APP_CONFIG.GEMINI_API_KEY.length > 0) {
            return window.APP_CONFIG.GEMINI_API_KEY;
        }
        // 2. Then check localStorage (user-entered)
        return localStorage.getItem(API_KEY_STORAGE_KEY);
    }

    /**
     * Check if using pre-configured API key (from runtime config)
     */
    hasEmbeddedApiKey() {
        return window.APP_CONFIG?.GEMINI_API_KEY && window.APP_CONFIG.GEMINI_API_KEY.length > 0;
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
        // Always hide banner if we have an embedded API key or any valid key
        if (this.hasApiKey() || this.hasEmbeddedApiKey()) {
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
