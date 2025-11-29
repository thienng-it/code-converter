# Code Converter: CodeceptJS ↔ Pytest

<div align="center">

![Code Converter](https://img.shields.io/badge/Code-Converter-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![AI Powered](https://img.shields.io/badge/AI-Gemini-orange?style=for-the-badge)

**A modern, AI-powered web application for converting test automation code between CodeceptJS and Pytest frameworks**

[Live Demo](#) | [Documentation](#documentation) | [Examples](#examples)

</div>

---

## ✨ Features

- 🤖 **AI-Powered Conversion** - Leverages Google's Gemini AI for intelligent, context-aware code transformation
- 🎨 **Stunning UI** - Modern glassmorphism design with Apple-like aesthetics
- ⚡ **Real-time Editing** - Monaco Editor (VS Code's editor) with syntax highlighting
- 🔄 **Bidirectional** - Convert CodeceptJS → Pytest and Pytest → CodeceptJS
- 📋 **Easy Export** - Copy to clipboard or download converted code
- 🎯 **Accurate** - Maintains test logic, assertions, and structure
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🔐 **Secure** - Client-side only, your API key never leaves your browser

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Gemini API key ([Get one free here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thienng-it/code-converter.git
   cd code-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

5. **Configure API Key**
   - Click "🔑 API Key" button
   - Enter your Gemini API key
   - Click "Save & Test"

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📖 Usage

### Basic Workflow

1. **Select Conversion Direction**
   - Click "CodeceptJS → Pytest" or "Pytest → CodeceptJS"

2. **Enter Your Code**
   - Paste your test code in the left editor
   - Or use the sample code provided

3. **Convert**
   - Click "✨ Convert Code" button
   - Wait for AI to process (usually 2-5 seconds)

4. **Export Result**
   - Copy to clipboard with "📋 Copy"
   - Download as file with "💾 Download"

### Keyboard Shortcuts

- `Cmd/Ctrl + Enter` - Convert code
- `Cmd/Ctrl + K` - Open API key modal
- `Cmd/Ctrl + V` - Paste in editor
- `Cmd/Ctrl + C` - Copy from editor

## 📝 Examples

### CodeceptJS → Pytest

**Input (CodeceptJS):**
```javascript
Feature('Login Tests');

Scenario('User can login', async ({ I }) => {
  I.amOnPage('/login');
  I.fillField('email', 'user@test.com');
  I.fillField('password', 'password123');
  I.click('Login');
  I.see('Welcome');
});
```

**Output (Pytest):**
```python
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

class TestLogin:
    def test_user_can_login(self):
        """User can login"""
        driver = webdriver.Chrome()
        
        driver.get('https://example.com/login')
        driver.find_element(By.NAME, 'email').send_keys('user@test.com')
        driver.find_element(By.NAME, 'password').send_keys('password123')
        driver.find_element(By.XPATH, '//button[text()="Login"]').click()
        
        assert 'Welcome' in driver.page_source
        driver.quit()
```

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Vanilla JavaScript + Vite
- **Code Editor**: Monaco Editor
- **AI Engine**: Google Gemini API
- **Styling**: Custom CSS with Glassmorphism
- **Deployment**: GitHub Pages

### Project Structure

```
code-converter/
├── src/
│   ├── converter/
│   │   ├── geminiConverter.js    # AI conversion logic
│   │   └── promptTemplates.js    # Conversion prompts
│   ├── components/
│   │   └── ApiKeyModal.js        # API key management
│   ├── styles/
│   │   ├── design-system.css     # Design tokens
│   │   └── main.css              # Application styles
│   └── main.js                   # App entry point
├── public/
│   └── favicon.svg
├── docs/
│   ├── USAGE.md                  # Detailed usage guide
│   └── EXAMPLES.md               # More examples
├── index.html
├── vite.config.js
└── package.json
```

## 🔧 Configuration

### API Key Storage

The API key is stored in your browser's `localStorage` under the key `gemini_api_key`. It never leaves your browser and is not sent to any server except Google's Gemini API.

### Customization

You can customize the design by modifying variables in `src/styles/design-system.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-purple: #667eea;
  /* ... more variables */
}
```

## 🚀 Deployment

### GitHub Pages (Automatic)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build the project
   - Deploy to GitHub Pages
   - Available at: `https://yourusername.github.io/code-converter/`

### Manual Deployment

```bash
npm run deploy
```

## 📚 Documentation

- [Usage Guide](./docs/USAGE.md) - Detailed usage instructions
- [Examples](./docs/EXAMPLES.md) - More conversion examples
- [API Reference](#) - Gemini AI API documentation

## 🤝 Contributing

This is an internal tool, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Limitations

- **AI-Based**: Conversion accuracy depends on Gemini AI and may require manual adjustments
- **Complex Patterns**: Very complex test scenarios may need human review
- **Custom Helpers**: CodeceptJS custom helpers may not convert perfectly
- **API Quota**: Free tier has rate limits (check [Gemini pricing](https://ai.google.dev/pricing))

## 🔮 Future Enhancements

- [ ] Support for more test frameworks (Selenium, Cypress, Playwright)
- [ ] Batch file conversion
- [ ] Conversion history
- [ ] Diff view for before/after comparison
- [ ] Export as test suites
- [ ] Custom conversion rules

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Joseph Nguyen**

- GitHub: [@thienng-it](https://github.com/thienng-it)

## 🙏 Acknowledgments

- [Google Gemini](https://ai.google.dev/) for AI capabilities
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editor
- [Vite](https://vitejs.dev/) for the build tool
- [CodeceptJS](https://codecept.io/) and [Pytest](https://pytest.org/) communities

---

<div align="center">
  Made with ❤️ for internal use
</div>
