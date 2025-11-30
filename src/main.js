/**
 * Main Application Entry Point
 * Handles Monaco Editor initialization and application logic
 */

import * as monaco from 'monaco-editor';
import { convertCode } from './converter/geminiConverter.js';
import { ApiKeyModal } from './components/ApiKeyModal.js';

// Sample code templates
const CODECEPTJS_SAMPLE = `Feature('Login Tests');

Scenario('User can login with valid credentials', async ({ I }) => {
  I.amOnPage('/login');
  I.fillField('username', 'testuser@example.com');
  I.fillField('password', 'password123');
  I.click('Login');
  I.see('Welcome, Test User');
  I.seeInCurrentUrl('/dashboard');
});

Scenario('User cannot login with invalid credentials', async ({ I }) => {
  I.amOnPage('/login');
  I.fillField('username', 'invalid@example.com');
  I.fillField('password', 'wrongpassword');
  I.click('Login');
  I.see('Invalid credentials');
  I.dontSee('Welcome');
});`;

const PYTEST_SAMPLE = `import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestLogin:
    @pytest.fixture(autouse=True)
    def setup(self):
        self.driver = webdriver.Chrome()
        yield
        self.driver.quit()
    
    def test_user_can_login_with_valid_credentials(self):
        """User can login with valid credentials"""
        self.driver.get('https://example.com/login')
        
        self.driver.find_element(By.NAME, 'username').send_keys('testuser@example.com')
        self.driver.find_element(By.NAME, 'password').send_keys('password123')
        self.driver.find_element(By.XPATH, '//button[text()="Login"]').click()
        
        assert 'Welcome, Test User' in self.driver.page_source
        assert '/dashboard' in self.driver.current_url
    
    def test_user_cannot_login_with_invalid_credentials(self):
        """User cannot login with invalid credentials"""
        self.driver.get('https://example.com/login')
        
        self.driver.find_element(By.NAME, 'username').send_keys('invalid@example.com')
        self.driver.find_element(By.NAME, 'password').send_keys('wrongpassword')
        self.driver.find_element(By.XPATH, '//button[text()="Login"]').click()
        
        assert 'Invalid credentials' in self.driver.page_source
        assert 'Welcome' not in self.driver.page_source`;

class CodeConverterApp {
    constructor() {
        this.inputEditor = null;
        this.outputEditor = null;
        this.currentDirection = 'codeceptjs-to-pytest';
        this.apiKeyModal = new ApiKeyModal();

        this.init();
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            // Initialize API Key Modal
            this.apiKeyModal.init();

            // Hide API key button if embedded key is available
            this.hideApiKeyUIIfEmbedded();

            // Initialize Monaco Editors
            this.initEditors();

            // Set initial sample code
            this.loadSampleCode();

            // Setup keyboard shortcuts
            this.setupKeyboardShortcuts();

            console.log('✨ Code Converter initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
            alert('Error initializing application. Please refresh the page.');
        }
    }

    /**
     * Hide API key UI elements if embedded key is available
     */
    hideApiKeyUIIfEmbedded() {
        if (this.apiKeyModal.hasEmbeddedApiKey()) {
            // Hide the API Key button in the controls
            const apiKeyBtn = document.querySelector('.btn-glass[onclick="app.openApiKeyModal()"]');
            if (apiKeyBtn) {
                apiKeyBtn.style.display = 'none';
            }
            // Ensure banner is hidden
            const banner = document.getElementById('apiKeyBanner');
            if (banner) {
                banner.classList.add('hidden');
            }
            console.log('🔑 Using embedded API key');
        }
    }

    /**
     * Initialize Monaco editors
     */
    initEditors() {
        // Configure Monaco
        monaco.editor.defineTheme('custom-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#0a0a14',
                'editor.lineHighlightBackground': '#1a1a2e20',
                'editorLineNumber.foreground': '#4a4a6a',
                'editor.selectionBackground': '#667eea40',
            }
        });

        // Input Editor
        this.inputEditor = monaco.editor.create(
            document.getElementById('inputEditor'),
            {
                value: '',
                language: 'javascript',
                theme: 'custom-dark',
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                lineNumbers: 'on',
                renderWhitespace: 'selection',
                bracketPairColorization: { enabled: true },
            }
        );

        // Output Editor (read-only)
        this.outputEditor = monaco.editor.create(
            document.getElementById('outputEditor'),
            {
                value: '',
                language: 'python',
                theme: 'custom-dark',
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                readOnly: true,
                tabSize: 4,
                lineNumbers: 'on',
                renderWhitespace: 'selection',
                bracketPairColorization: { enabled: true },
            }
        );
    }

    /**
     * Load sample code based on current direction
     */
    loadSampleCode() {
        if (this.currentDirection === 'codeceptjs-to-pytest') {
            this.inputEditor.setValue(CODECEPTJS_SAMPLE);
        } else {
            this.inputEditor.setValue(PYTEST_SAMPLE);
        }
        this.outputEditor.setValue('// Click "Convert Code" to see the converted output here...');
    }

    /**
     * Set conversion direction
     */
    setDirection(direction) {
        this.currentDirection = direction;

        // Update UI
        const codeceptjsBtn = document.getElementById('codeceptjsToPytestBtn');
        const pytestBtn = document.getElementById('pytestToCodeceptjsBtn');
        const inputLabel = document.getElementById('inputLabel');
        const outputLabel = document.getElementById('outputLabel');
        const inputLang = document.getElementById('inputLang');
        const outputLang = document.getElementById('outputLang');

        if (direction === 'codeceptjs-to-pytest') {
            codeceptjsBtn.classList.add('active');
            pytestBtn.classList.remove('active');
            inputLabel.textContent = 'Input (CodeceptJS)';
            outputLabel.textContent = 'Output (Pytest)';
            inputLang.textContent = 'JavaScript';
            outputLang.textContent = 'Python';

            // Update editor languages
            monaco.editor.setModelLanguage(this.inputEditor.getModel(), 'javascript');
            monaco.editor.setModelLanguage(this.outputEditor.getModel(), 'python');
        } else {
            pytestBtn.classList.add('active');
            codeceptjsBtn.classList.remove('active');
            inputLabel.textContent = 'Input (Pytest)';
            outputLabel.textContent = 'Output (CodeceptJS)';
            inputLang.textContent = 'Python';
            outputLang.textContent = 'JavaScript';

            // Update editor languages
            monaco.editor.setModelLanguage(this.inputEditor.getModel(), 'python');
            monaco.editor.setModelLanguage(this.outputEditor.getModel(), 'javascript');
        }

        // Load appropriate sample
        this.loadSampleCode();
    }

    /**
     * Convert code using Gemini AI
     */
    async convert() {
        const apiKey = this.apiKeyModal.getApiKey();

        // Check if API key is configured
        if (!apiKey) {
            // Only show modal if there's no embedded key
            if (!this.apiKeyModal.hasEmbeddedApiKey()) {
                alert('Please configure your Gemini API key first');
                this.openApiKeyModal();
            } else {
                alert('API key configuration error. Please contact the administrator.');
            }
            return;
        }

        const inputCode = this.inputEditor.getValue().trim();

        if (!inputCode) {
            alert('Please enter some code to convert');
            return;
        }

        try {
            // Show loading state
            this.setLoadingState(true);

            // Convert code
            const convertedCode = await convertCode(
                inputCode,
                this.currentDirection,
                apiKey
            );

            // Display result
            this.outputEditor.setValue(convertedCode);

            // Auto-scroll to top of output
            this.outputEditor.revealLine(1);

        } catch (error) {
            console.error('Conversion error:', error);
            alert(`Conversion failed: ${error.message}`);
            this.outputEditor.setValue(`// Error: ${error.message}\n// Please check your input code and API key.`);
        } finally {
            this.setLoadingState(false);
        }
    }

    /**
     * Set loading state for convert button
     */
    setLoadingState(isLoading) {
        const btn = document.getElementById('convertBtn');
        const text = document.getElementById('convertBtnText');
        const spinner = document.getElementById('convertBtnSpinner');

        if (isLoading) {
            btn.disabled = true;
            text.classList.add('hidden');
            spinner.classList.remove('hidden');
        } else {
            btn.disabled = false;
            text.classList.remove('hidden');
            spinner.classList.add('hidden');
        }
    }

    /**
     * Clear input editor
     */
    clearInput() {
        this.inputEditor.setValue('');
        this.inputEditor.focus();
    }

    /**
     * Paste from clipboard
     */
    async pasteFromClipboard() {
        try {
            const text = await navigator.clipboard.readText();
            this.inputEditor.setValue(text);
            this.inputEditor.focus();
        } catch (error) {
            alert('Failed to paste from clipboard. Please paste manually (Cmd+V / Ctrl+V)');
        }
    }

    /**
     * Copy output to clipboard
     */
    async copyOutput() {
        const outputCode = this.outputEditor.getValue();

        if (!outputCode || outputCode.startsWith('//')) {
            alert('No converted code to copy');
            return;
        }

        try {
            await navigator.clipboard.writeText(outputCode);

            // Show feedback
            const btn = event.target.closest('.icon-btn');
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        } catch (error) {
            alert('Failed to copy to clipboard. Please copy manually (Cmd+C / Ctrl+C)');
        }
    }

    /**
     * Download output code
     */
    downloadOutput() {
        const outputCode = this.outputEditor.getValue();

        if (!outputCode || outputCode.startsWith('//')) {
            alert('No converted code to download');
            return;
        }

        const filename = this.currentDirection === 'codeceptjs-to-pytest'
            ? 'test_converted.py'
            : 'test_converted.js';

        const blob = new Blob([outputCode], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    /**
     * Open API key modal
     */
    openApiKeyModal() {
        this.apiKeyModal.open();
    }

    /**
     * Close API key modal
     */
    closeApiKeyModal() {
        this.apiKeyModal.close();
    }

    /**
     * Save API key
     */
    async saveApiKey() {
        await this.apiKeyModal.save();
    }

    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Cmd/Ctrl + Enter to convert
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                e.preventDefault();
                this.convert();
            }

            // Cmd/Ctrl + K to open API key modal
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                this.openApiKeyModal();
            }
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new CodeConverterApp();
    });
} else {
    window.app = new CodeConverterApp();
}

export default CodeConverterApp;
