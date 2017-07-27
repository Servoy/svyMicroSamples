Feature: Testing the Servoy Sample Galery - Foundset   
    Scenario Outline: Protractor and Cucumber Test

#Given I go to "http://demo.servoy.com/sampleGallery/solutions/sampleGallery/index.html?f=galleryMain"
Given I go to "My Application to Test"
When servoy sidenav component with name "galleryMain.nav" tab "Working with Data" is clicked
When servoy sidenav component with name "galleryMain.nav" tab "Basic Filtering" is clicked

# When servoy calendar component with name "filterOrdersList.startDate" is clicked
# When servoy calendar component is clicked untill I reach month <startMonth> in year <startYear>
# When servoy calendar component day "15" is clicked

# When servoy calendar component with name "filterOrdersList.endDate" is clicked
# When servoy calendar component is clicked untill I reach month <endMonth> in year <endYear>
# When servoy calendar component day "16" is clicked

When servoy select2tokenizer component with name "filterOrdersList.customerFilter" is clicked
When servoy select2tokenizer component with name "filterOrdersList.customerFilter" the text <customer> is inserted
Then servoy select2tokenizer component with class name "select2-results__options" record number "1" equals <customer>
When servoy select2tokenizer component with class name "select2-results__options" record number "1" is clicked

When servoy select2tokenizer component with name "filterOrdersList.employeeFilter" is clicked
When servoy select2tokenizer component with name "filterOrdersList.employeeFilter" the text <employee> is inserted
Then servoy select2tokenizer component with class name "select2-results__options" record number "1" equals <employee>
When servoy select2tokenizer component with class name "select2-results__options" record number "1" is clicked


When servoy table component with name "filterOrdersList.svy_lvp_filterOrdersList" I scroll to the record with <customer> as text

# Then I am done


@data_table_servoy
Examples:
|startMonth      | startYear   | endMonth   | endYear   | customer      | employee             | tab                | nav               |
# |september       | 2016       | september  | 2017      | Ernst Handel  |  Laura Callahan       | cookies |
#|february        | 2016        | september  | 2017      | Ernst Handel  |  Eastern Connection   |
#|january         | 2017        | september  | 2017      | Ernst Handel  |  Folies gourmandes    |
#|december        | 2017        | september  | 2017      | Ernst Handel  |          |
#|december        | 2018        | september  | 2017      | Ernst Handel  |          |
# |july            | 1997        | september  | 2017      | Romero y tomillo  | Anne Dodsworth    |
|july            | 1997        | september  | 2017      | Romero y tomillo  | Margaret Peacock    | Working with Data |  galleryMain.nav |
# |july            | 1997        | september  | 2017      | Romero y tomillo  | Anne Dodsworth    | Working with Data |  galleryMain.nav |
# |july            | 1997        | september  | 2017      | Romero y tomillo  | Anne Dodsworth    | cookie            |  cookietwo       | 