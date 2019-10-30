const aws = require("aws-sdk");
require('env2')('./config.env');

aws.config.region = "eu-central-1";

const S3_BUCKET = process.env.S3_BUCKET;

module.exports.uploadImage = (req, res, next) => {
  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  console.log("File name", fileName)
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"
  };
  console.log("PARAMS", s3Params)

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log("HERE");
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    console.log("Return DATA", returnData)
    res.write(JSON.stringify(returnData));
    res.end();
  });
};
