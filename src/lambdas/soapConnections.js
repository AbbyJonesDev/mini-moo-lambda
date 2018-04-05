const soap = require('soap');
const url = 'http://www.holidaywebservice.com/HolidayService_v2/HolidayService2.asmx?wsdl';
const args = { countryCode: 'Canada' };

exports.handler = (event, context, callback) => {

  soap.createClient(url, function (err, client) {
    client.GetHolidaysAvailable(args, function (err, result) {
      console.log(result);
      if(err){
        callback(err);
      }
      callback(null, result);
    });
  });
};