var testData = {};

testData = {
    valid : {
        'msisdnLocator': '#pinMsisdn',
        'msisdnInput': 1111111,
        'msisdnSubmit': '#msisdnSubmit',
        'pinLocator': '#pinPin',
        'pinInput': 4444,
        'pinSubmit': '#pinSubmit',
        'thankHeadLocator' : '.navbar-brand',
        'thankHeadText' : 'Sam Media Talent Test',
        'thankMessageLocator' : '#tqSection',
        'thankMessageText' : 'Thanks you for subscribing'
    },
    blank : ' ',
    
    error : {
        'msisdn' : '#pinMsisdn + .invalid-feedback',
        'msisdnMessage' : 'Invalid Msisdn.',
        'pin' : '#pinPin + .invalid-feedback',
        'pinMessage' : 'Invalid Pin.',
    },
}

module.exports={
    testData
};