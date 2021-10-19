Feature: Calculate Stamp Duty Land Tax

  Scenario Outline: Standard buyer
    Given Lucy wants to buy a property with the value of <propertyValue>
    When Lucy calculates the Stamp Duty Land Tax cost
    And She <ftb>
    And She owns <nProps> property
    Then Lucy has to pay <expectedSdlt> of stamp duty
    Examples:
      | propertyValue | ftb                         | nProps | expectedSdlt |
      # own multiple properties
      | "100,000"     | "is not a first time buyer" | 2      | "3,000.00"   |
      | "125,001"     | "is not a first time buyer" | 2      | "3,750.05"   |
      | "250,001"     | "is not a first time buyer" | 2      | "10000.08"   |
      | "925,000"     | "is not a first time buyer" | 2      | "64,000.00"  |
      | "925,001"     | "is not a first time buyer" | 2      | "64,000.13"  |
      | "1,500,000"   | "is not a first time buyer" | 2      | "138,750.00" |
      | "1,500,001"   | "is not a first time buyer" | 2      | "138,750.15" |
      # own 1 property
      | "100,000"     | "is not a first time buyer" | 1      | "0.00"       |
      | "125,001"     | "is not a first time buyer" | 1      | "0.02"       |
      | "250,001"     | "is not a first time buyer" | 1      | "2,500.05"   |
      | "925,000"     | "is not a first time buyer" | 1      | "36,250.00"  |
      | "925,001"     | "is not a first time buyer" | 1      | "36,250.10"  |
      | "1,500,000"   | "is not a first time buyer" | 1      | "93,750.00"  |
      | "1,500,001"   | "is not a first time buyer" | 1      | "93,750.12"  |

  Scenario Outline: First Time Buyer
    Given Lucy wants to buy a property with the value of <propertyValue>
    When Lucy calculates the Stamp Duty Land Tax cost
    And She <ftb>
    Then Lucy has to pay <expectedSdlt> of stamp duty
    Examples:
      | propertyValue | ftb                     | expectedSdlt |
      | "100,000"     | "is a first time buyer" | "0"          |
      | "300,000"     | "is a first time buyer" | "0"          |
      | "300,001"     | "is a first time buyer" | "0.05"       |
      | "350,000"     | "is a first time buyer" | "2,500"      |
      | "500,000"     | "is a first time buyer" | "10,000"     |
      | "500,001"     | "is a first time buyer" | "15,000.05"  |
