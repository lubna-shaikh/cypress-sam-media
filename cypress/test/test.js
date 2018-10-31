var td = require('./testData.js')

describe('TS0001 - Test Scenario to verify the functionality of Sample Application', () => {

  beforeEach(function () {
    cy.visit('/')
  })
  it('Should display the Thank you page, on entering valid MSISDN and PIN - TC0001', () => {
    cy.get(td.testData.valid.msisdnLocator).type(td.testData.valid.msisdnInput)
      .get(td.testData.valid.msisdnSubmit).click()
      .get(td.testData.valid.pinLocator).type(td.testData.valid.pinInput)
      .get(td.testData.valid.pinSubmit).click()
      .get(td.testData.valid.thankHeadLocator).contains(td.testData.valid.thankHeadText)
      .get(td.testData.valid.thankMessageLocator).contains(td.testData.valid.thankMessageText)
  });

  it('Should assert that blank entries are NOT accepted for MSISDN - TC0002', () => {
    cy.get(td.testData.valid.msisdnLocator).type(td.testData.blank)
      .get(td.testData.valid.msisdnSubmit).click()
      .get(td.testData.error.msisdn).contains(td.testData.error.msisdnMessage)
  });

  it('Should assert that blank entries are NOT accepted for PIN - TC0003', () => {
    cy.get(td.testData.valid.msisdnLocator).type(td.testData.valid.msisdnInput)
      .get(td.testData.valid.msisdnSubmit).click()
      .get(td.testData.valid.pinLocator).type(td.testData.blank)
      .get(td.testData.valid.pinSubmit).click()
      .get(td.testData.error.pin).contains(td.testData.error.pinMessage)
  });

  var invalidMsisdn = {
    'boundary1': 11111111,
    'boundary2': 111111,
    'alphanumeric' : 'abc'+1111,
    'string' :  'string'
  }
  it('Should assert that invalid entries for MSISDN result into an error - TC0004', () => {
    for (var i in invalidMsisdn) {
      // for(var i in td.testData.invalid){
      cy.get(td.testData.valid.msisdnLocator).type(invalidMsisdn[i])
        .get(td.testData.valid.msisdnSubmit).click()
        .get(td.testData.error.msisdn).contains(td.testData.error.msisdnMessage)
        .visit('/')
    }
  })

  var invalidPin = {
    'boundary1': 44444,
    'boundary2': 444,
    'alphanumeric' : 'abc'+1111,
    'string' :  'string'
  }
  it('Should assert that invalid entries for PIN result into an error - TC0005', () => {
    for (var i in invalidPin) {
    cy.get(td.testData.valid.msisdnLocator).type(td.testData.valid.msisdnInput)
      .get(td.testData.valid.msisdnSubmit).click()
      .get(td.testData.valid.pinLocator).type(invalidPin[i])
      .get(td.testData.valid.pinSubmit).click()
      .get(td.testData.error.pin).contains(td.testData.error.pinMessage)
      .visit('/')
    }
  });
  
   it('Should not accept any value other than valid MSISDN - TC0006', () => {
    for (var i in invalidMsisdn) {
      var msisdnInput = cy.get(td.testData.valid.msisdnLocator).type(invalidMsisdn[i]);
      cy.get(td.testData.valid.msisdnSubmit).click()
      if (msisdnInput != td.testData.valid.msisdnInput) {
        cy.get(td.testData.error.msisdn).contains(td.testData.error.msisdnMessage)
          .visit('/')
      }
    }
  });
  
  it('Should not accept any value other than valid PIN - TC0007', () => {
    for (var i in invalidPin) {
      cy.get(td.testData.valid.msisdnLocator).type(td.testData.valid.msisdnInput)
        .get(td.testData.valid.msisdnSubmit).click()
      var pinInput = cy.get(td.testData.valid.pinLocator).type(invalidPin[i]);
      cy.get(td.testData.valid.pinSubmit).click()
      if (pinInput != td.testData.valid.pinInput) {
        cy.get(td.testData.error.pin).contains(td.testData.error.pinMessage)
          .visit('/')
      }
    }
  });

});
