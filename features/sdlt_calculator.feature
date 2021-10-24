Feature: Calculate Stamp Duty Land Tax

  Scenario Outline: Buying an additional property
    Given Lucy wants to buy a property with the value of <propertyValue>
    When Lucy calculates the Stamp Duty Land Tax cost
    And She is <propertyCondition>
    Then Lucy's Stamp Duty Land Tax quote is <expectedSdlt>
    Examples:
      | propertyValue | propertyCondition               | expectedSdlt |
      # buying an additional property
      | "39,999"      | "buying an additional property" | "0"          |
      | "40,000"      | "buying an additional property" | "1200"          |
      | "100,000"     | "buying an additional property" | "3,000.00"   |
      | "125,001"     | "buying an additional property" | "3,750.05"   |
      | "250,001"     | "buying an additional property" | "10000.08"   |
      | "925,000"     | "buying an additional property" | "64,000.00"  |
      | "925,001"     | "buying an additional property" | "64,000.13"  |
      | "1,500,000"   | "buying an additional property" | "138,750.00" |
      | "1,500,001"   | "buying an additional property" | "138,750.15" |

  Scenario Outline: Buying next home
    Given Lucy wants to buy a property with the value of <propertyValue>
    When Lucy calculates the Stamp Duty Land Tax cost
    And She is <propertyCondition>
    Then Lucy's Stamp Duty Land Tax quote is <expectedSdlt>
    Examples:
      | propertyValue | propertyCondition               | expectedSdlt |
      # buying her next home
      | "100,000"     | "buying her next home"          | "0.00"       |
      | "125,001"     | "buying her next home"          | "0.02"       |
      | "250,001"     | "buying her next home"          | "2,500.05"   |
      | "925,000"     | "buying her next home"          | "36,250.00"  |
      | "925,001"     | "buying her next home"          | "36,250.10"  |
      | "1,500,000"   | "buying her next home"          | "93,750.00"  |
      | "1,500,001"   | "buying her next home"          | "93,750.12"  |

  Scenario Outline: First time buyer
    Given Lucy wants to buy a property with the value of <propertyValue>
    When Lucy calculates the Stamp Duty Land Tax cost
    And She is <propertyCondition>
    Then Lucy's Stamp Duty Land Tax quote is <expectedSdlt>
    Examples:
      | propertyValue | propertyCondition               | expectedSdlt |
      # is a first time buyer
      | "100,000"     | "a first time buyer"         | "0"          |
      | "300,000"     | "a first time buyer"         | "0"          |
      | "300,001"     | "a first time buyer"         | "0.05"       |
      | "350,000"     | "a first time buyer"         | "2,500"      |
      | "500,000"     | "a first time buyer"         | "10,000"     |
      | "500,001"     | "a first time buyer"         | "15,000.05"  |
