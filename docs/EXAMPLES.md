# Conversion Examples

Real-world examples of CodeceptJS ↔ Pytest conversions.

## Example 1: Basic Login Test

### CodeceptJS → Pytest

**Input:**
```javascript
Feature('Login Tests');

Scenario('User can login with valid credentials', async ({ I }) => {
  I.amOnPage('https://example.com/login');
  I.fillField('email', 'user@test.com');
  I.fillField('password', 'SecurePass123');
  I.click('button[type="submit"]');
  I.see('Dashboard');
  I.seeInCurrentUrl('/dashboard');
});
```

**Output:**
```python
import pytest
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
        
        self.driver.find_element(By.NAME, 'email').send_keys('user@test.com')
        self.driver.find_element(By.NAME, 'password').send_keys('SecurePass123')
        self.driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
        
        assert 'Dashboard' in self.driver.page_source
        assert '/dashboard' in self.driver.current_url
```

---

## Example 2: Form Validation Test

### Pytest → CodeceptJS

**Input:**
```python
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

class TestFormValidation:
    def test_empty_form_shows_errors(self):
        driver = webdriver.Chrome()
        driver.get('https://example.com/register')
        
        driver.find_element(By.ID, 'submit-btn').click()
        
        assert 'Email is required' in driver.page_source
        assert 'Password is required' in driver.page_source
        
        driver.quit()
```

**Output:**
```javascript
Feature('Form Validation Tests');

Scenario('Empty form shows errors', async ({ I }) => {
  I.amOnPage('https://example.com/register');
  I.click('#submit-btn');
  I.see('Email is required');
  I.see('Password is required');
});
```

---

## Example 3: Wait for Element

### CodeceptJS → Pytest

**Input:**
```javascript
Feature('Dynamic Content');

Scenario('Wait for AJAX content to load', async ({ I }) => {
  I.amOnPage('/products');
  I.waitForElement('.product-list', 10);
  I.see('Product 1');
  I.click('.product-item:first-child');
  I.waitForVisible('.product-details', 5);
  I.see('Product Description');
});
```

**Output:**
```python
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestDynamicContent:
    @pytest.fixture(autouse=True)
    def setup(self):
        self.driver = webdriver.Chrome()
        self.wait = WebDriverWait(self.driver, 10)
        yield
        self.driver.quit()
    
    def test_wait_for_ajax_content_to_load(self):
        """Wait for AJAX content to load"""
        self.driver.get('https://example.com/products')
        
        # Wait for element for 10 seconds
        self.wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '.product-list'))
        )
        
        assert 'Product 1' in self.driver.page_source
        
        first_product = self.driver.find_element(
            By.CSS_SELECTOR, '.product-item:first-child'
        )
        first_product.click()
        
        # Wait for visibility for 5 seconds
        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, '.product-details'))
        )
        
        assert 'Product Description' in self.driver.page_source
```

---

## Example 4: Multiple Assertions

### Pytest → CodeceptJS

**Input:**
```python
def test_user_profile_page(self):
    driver = webdriver.Chrome()
    driver.get('https://example.com/profile')
    
    # Check multiple elements
    assert driver.find_element(By.ID, 'username').text == 'JohnDoe'
    assert driver.find_element(By.ID, 'email').text == 'john@example.com'
    assert driver.find_element(By.CLASS_NAME, 'profile-pic').is_displayed()
    assert 'Member since' in driver.page_source
    
    driver.quit()
```

**Output:**
```javascript
Feature('User Profile');

Scenario('User profile page displays correct information', async ({ I }) => {
  I.amOnPage('https://example.com/profile');
  
  I.see('JohnDoe', '#username');
  I.see('john@example.com', '#email');
  I.seeElement('.profile-pic');
  I.see('Member since');
});
```

---

## Example 5: Dropdown Selection

### CodeceptJS → Pytest

**Input:**
```javascript
Feature('Product Filters');

Scenario('Filter products by category', async ({ I }) => {
  I.amOnPage('/products');
  I.selectOption('select[name="category"]', 'Electronics');
  I.waitForElement('.filtered-results', 5);
  I.see('Laptop');
  I.see('Smartphone');
  I.dontSee('Clothing Item');
});
```

**Output:**
```python
from selenium.webdriver.support.ui import Select

class TestProductFilters:
    @pytest.fixture(autouse=True)
    def setup(self):
        self.driver = webdriver.Chrome()
        yield
        self.driver.quit()
    
    def test_filter_products_by_category(self):
        """Filter products by category"""
        self.driver.get('https://example.com/products')
        
        # Select dropdown option
        select_element = Select(
            self.driver.find_element(By.CSS_SELECTOR, 'select[name="category"]')
        )
        select_element.select_by_visible_text('Electronics')
        
        # Wait for filtered results
        WebDriverWait(self.driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '.filtered-results'))
        )
        
        page_source = self.driver.page_source
        assert 'Laptop' in page_source
        assert 'Smartphone' in page_source
        assert 'Clothing Item' not in page_source
```

---

## Example 6: File Upload

### Pytest → CodeceptJS

**Input:**
```python
def test_file_upload(self):
    driver = webdriver.Chrome()
    driver.get('https://example.com/upload')
    
    # Upload file
    file_input = driver.find_element(By.ID, 'file-input')
    file_input.send_keys('/path/to/file.pdf')
    
    driver.find_element(By.ID, 'upload-btn').click()
    
    WebDriverWait(driver, 10).until(
        EC.text_to_be_present_in_element(
            (By.ID, 'upload-status'), 
            'Upload successful'
        )
    )
    
    driver.quit()
```

**Output:**
```javascript
Feature('File Upload');

Scenario('Upload a PDF file', async ({ I }) => {
  I.amOnPage('https://example.com/upload');
  I.attachFile('#file-input', '/path/to/file.pdf');
  I.click('#upload-btn');
  I.waitForText('Upload successful', 10, '#upload-status');
});
```

---

## Example 7: Table Interaction

### CodeceptJS → Pytest

**Input:**
```javascript
Feature('Data Tables');

Scenario('Verify table data', async ({ I }) => {
  I.amOnPage('/users');
  I.see('John Doe', 'table tbody tr:nth-child(1)');
  I.see('jane@example.com', 'table tbody tr:nth-child(2)');
  I.click('table tbody tr:nth-child(1) .edit-btn');
  I.waitForElement('#edit-modal', 3);
});
```

**Output:**
```python
class TestDataTables:
    def test_verify_table_data(self):
        """Verify table data"""
        driver = webdriver.Chrome()
        driver.get('https://example.com/users')
        
        # Verify first row contains John Doe
        first_row = driver.find_element(
            By.CSS_SELECTOR, 'table tbody tr:nth-child(1)'
        )
        assert 'John Doe' in first_row.text
        
        # Verify second row contains email
        second_row = driver.find_element(
            By.CSS_SELECTOR, 'table tbody tr:nth-child(2)'
        )
        assert 'jane@example.com' in second_row.text
        
        # Click edit button in first row
        edit_btn = driver.find_element(
            By.CSS_SELECTOR, 'table tbody tr:nth-child(1) .edit-btn'
        )
        edit_btn.click()
        
        # Wait for modal
        WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.ID, 'edit-modal'))
        )
        
        driver.quit()
```

---

## Best Practices

### ✅ DO:
- Provide complete test scenarios
- Use standard locators (CSS, XPath)
- Include setup and teardown code
- Add descriptive test names
- Use clear assertions

### ❌ DON'T:
- Use custom helpers without explaining them
- Mix multiple test concepts in one scenario
- Omit important context
- Use overly complex nested selectors

## Notes

- The AI may make slightly different choices in locator strategy (ID vs CSS vs XPath)
- Always review and test the converted code
- Complex fixtures/hooks may need manual adjustment
- Custom CodeceptJS plugins won't have direct Pytest equivalents
