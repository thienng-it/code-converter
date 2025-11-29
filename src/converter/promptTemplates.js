/**
 * Prompt templates for CodeceptJS <-> Pytest conversion
 */

export const CODECEPTJS_TO_PYTEST_PROMPT = `You are an expert code converter specializing in test automation frameworks.

**Task**: Convert the following CodeceptJS test code to Pytest.

**Key Conversion Rules**:

1. **Imports & Setup**:
   - CodeceptJS uses \`Feature()\` and \`Scenario()\` → Pytest uses \`class Test*\` or \`def test_*()\`
   - Replace \`I\` object methods with appropriate Selenium/Playwright/Requests calls
   - Import pytest and necessary libraries

2. **Test Structure**:
   - \`Feature('name')\` → Test class name or module docstring
   - \`Scenario('name', async ({ I }) => {})\` → \`def test_name(self):\` or \`async def test_name(self):\`
   - Remove async/await if not needed in Python

3. **Common Method Mappings**:
   - \`I.amOnPage(url)\` → \`self.driver.get(url)\` or \`page.goto(url)\`
   - \`I.click(locator)\` → \`self.driver.find_element(*locator).click()\` or \`page.click(locator)\`
   - \`I.fillField(field, value)\` → \`self.driver.find_element(*field).send_keys(value)\`
   - \`I.see(text)\` → \`assert text in self.driver.page_source\`
   - \`I.dontSee(text)\` → \`assert text not in self.driver.page_source\`
   - \`I.waitForElement(locator)\` → \`WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(locator))\`

4. **Assertions**:
   - CodeceptJS assertions → Python \`assert\` statements
   - Use pytest's assertion introspection

5. **Locators**:
   - Convert CSS/XPath strings appropriately
   - Use proper Selenium By locators or Playwright selectors

**Input CodeceptJS Code**:
\`\`\`javascript
{INPUT_CODE}
\`\`\`

**Instructions**:
- Provide ONLY the converted Pytest code
- Include necessary imports
- Maintain the same test logic and assertions
- Use proper Python naming conventions (snake_case)
- Add brief comments where conversion is non-obvious
- Ensure the code is syntactically correct and runnable

**Output** (provide ONLY the Python code, no explanations):`;

export const PYTEST_TO_CODECEPTJS_PROMPT = `You are an expert code converter specializing in test automation frameworks.

**Task**: Convert the following Pytest test code to CodeceptJS.

**Key Conversion Rules**:

1. **Imports & Setup**:
   - Pytest test functions/classes → CodeceptJS \`Feature()\` and \`Scenario()\`
   - Replace Selenium/Playwright calls with \`I\` object methods
   - Remove pytest imports

2. **Test Structure**:
   - \`class Test*\` or module docstring → \`Feature('name')\`
   - \`def test_name()\` or \`async def test_name()\` → \`Scenario('name', async ({ I }) => {})\`
   - Convert to async JavaScript

3. **Common Method Mappings**:
   - \`driver.get(url)\` or \`page.goto(url)\` → \`I.amOnPage(url)\`
   - \`driver.find_element(*locator).click()\` or \`page.click()\` → \`I.click(locator)\`
   - \`driver.find_element(*field).send_keys(value)\` → \`I.fillField(field, value)\`
   - \`assert text in page_source\` → \`I.see(text)\`
   - \`assert text not in page_source\` → \`I.dontSee(text)\`
   - \`WebDriverWait(...).until(...)\` → \`I.waitForElement(locator)\`

4. **Assertions**:
   - Python \`assert\` statements → CodeceptJS \`I.see()\` or custom assertions
   - Complex assertions may need \`I.executeScript()\`

5. **Locators**:
   - Convert Selenium By locators to CSS/XPath strings
   - Use CodeceptJS locator format

**Input Pytest Code**:
\`\`\`python
{INPUT_CODE}
\`\`\`

**Instructions**:
- Provide ONLY the converted CodeceptJS code
- Include Feature() declaration
- Maintain the same test logic and assertions
- Use proper JavaScript camelCase naming
- Add brief comments where conversion is non-obvious
- Ensure the code is syntactically correct and runnable

**Output** (provide ONLY the JavaScript code, no explanations):`;

export function buildConversionPrompt(code, direction) {
    const template = direction === 'codeceptjs-to-pytest'
        ? CODECEPTJS_TO_PYTEST_PROMPT
        : PYTEST_TO_CODECEPTJS_PROMPT;

    return template.replace('{INPUT_CODE}', code);
}
