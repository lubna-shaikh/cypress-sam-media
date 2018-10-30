# cypress-sam-media

This repository is created for Sam Media - QA Assignment.

Following are the details:
1. The Test Scripts and Test Data can be found at cypress-sam-media/cypress/test/ (https://github.com/lubna-shaikh/cypress-sam-media/tree/master/cypress/test).

2. Default value for cypress.json are overridden as follows:

    {
        "baseUrl": "https://quiet-sands-70900.herokuapp.com/",
        
      "integrationFolder": "./cypress/test"      
    }

3. Default value for 'scripts' in 'package.json' are overridden as follows:

    "scripts": {
        "cypress:open": "cypress open"
    },
  
4. Run the test case, using the following command:

    npm run cypress:open
