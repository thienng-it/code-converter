# Usage Guide

Complete guide to using the Code Converter application.

## Getting Started

### 1. Configure Your API Key

Before you can convert code, you need to configure your Gemini API key:

1. Click the **🔑 API Key** button in the top right
2. If you don't have an API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy the generated key
3. Paste your API key in the modal
4. Click **Save & Test**
5. Wait for validation (should show ✅ success message)

Your API key is stored securely in your browser's local storage and never sent to any server except Google's Gemini API.

## Converting Code

### CodeceptJS → Pytest

1. Click the **📝 CodeceptJS → Pytest** button
2. Paste or type your CodeceptJS test code in the left editor
3. Click **✨ Convert Code**
4. Wait 2-5 seconds for the AI to process
5. Review the converted Pytest code in the right editor
6. Use **📋 Copy** or **💾 Download** to export

### Pytest → CodeceptJS

1. Click the **🐍 Pytest → CodeceptJS** button
2. Paste or type your Pytest test code in the left editor
3. Click **✨ Convert Code**
4. Wait 2-5 seconds for the AI to process
5. Review the converted CodeceptJS code in the right editor
6. Use **📋 Copy** or **💾 Download** to export

## Editor Features

### Syntax Highlighting

The Monaco Editor provides full syntax highlighting for both JavaScript (CodeceptJS) and Python (Pytest).

### Auto-completion

Press `Ctrl+Space` to trigger auto-completion suggestions.

### Multi-cursor Editing

Hold `Alt/Option` and click to add multiple cursors.

### Find & Replace

- `Cmd/Ctrl + F` - Find
- `Cmd/Ctrl + H` - Find and Replace

### Code Formatting

The editor automatically formats your code with proper indentation.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + Enter` | Convert code |
| `Cmd/Ctrl + K` | Open API key modal |
| `Cmd/Ctrl + V` | Paste into editor |
| `Cmd/Ctrl + C` | Copy from editor |
| `Cmd/Ctrl + F` | Find in editor |
| `Cmd/Ctrl + H` | Find and replace |

## Tips for Best Results

### 1. Provide Complete Test Cases

Include the entire test case or test class for better conversion accuracy:

✅ **Good:**
```javascript
Feature('Login');

Scenario('Successful login', async ({ I }) => {
  I.amOnPage('/login');
  I.fillField('username', 'test@example.com');
  I.click('Login');
  I.see('Welcome');
});
```

❌ **Bad:**
```javascript
I.fillField('username', 'test');
I.click('Login');
```

### 2. Use Standard Patterns

The AI works best with standard testing patterns. Avoid overly complex custom helpers.

### 3. Review the Output

Always review the converted code. While the AI is accurate, complex scenarios may need minor adjustments.

### 4. Include Comments

If your test has complex logic, add comments to help the AI understand the intent:

```javascript
// Wait for modal to appear before clicking
I.waitForElement('.modal');
I.click('.modal .confirm-btn');
```

## Troubleshooting

### "Please configure your Gemini API key first"

**Solution:** Click the 🔑 API Key button and enter your Gemini API key.

### "Invalid API key"

**Solution:** 
- Verify your API key is correct
- Check if the key has been deactivated in Google AI Studio
- Generate a new API key if needed

### "API quota exceeded"

**Solution:**
- Wait for your quota to reset (usually next day)
- Upgrade to a paid plan in Google AI Studio
- Use a different API key

### "Conversion failed: empty response from AI"

**Solution:**
- Check your internet connection
- Try again - sometimes API calls can timeout
- Simplify your input code if it's very long

### Output code has syntax errors

**Solution:**
- Review the input code for completeness
- Check if you're using custom helpers that aren't standard
- Manually adjust the output as needed
- Report the issue for future improvements

## Advanced Usage

### Converting Multiple Files

While the app currently doesn't support batch conversion, you can:

1. Convert one file at a time
2. Copy each result to your project
3. Use the download feature to save each converted file

### Custom Locators

If you use custom locators in CodeceptJS, the AI will attempt to convert them, but you may need to adjust:

**CodeceptJS:**
```javascript
I.click({ css: '.custom-selector' });
```

**Pytest (may need adjustment):**
```python
driver.find_element(By.CSS_SELECTOR, '.custom-selector').click()
```

### Page Objects

The converter handles Page Object pattern, but complex page objects may need manual review:

**Tip:** Convert page methods one at a time for better accuracy.

## Privacy & Security

- ✅ Your code is sent to Google's Gemini API for conversion
- ✅ Your API key is stored locally in your browser
- ✅ No data is stored on any server
- ✅ The application is entirely client-side
- ✅ Works offline after initial load (except API calls)

## Getting Help

If you encounter issues:

1. Check this usage guide
2. Review the [Examples](./EXAMPLES.md)
3. Check browser console for error messages
4. Contact the development team
