const constants = require('../lib/constants');

const baseConfig = function({env}) {
    if ( env == "production") {
        return {
            host: 'https://backend.workspace.codequotient.com', 
            frontendURL: 'https://workspace.codequotient.com',
            cloudStorageUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
            sessionCookieConfig: {
                domain: '.workspace.codequotient.com',
                path: '/',
                httpOnly: true,
                secure: true,
            }
        }
    }
    else if (env == "testing") {
        return {
            host: 'https://ws-backend.cqtestga.com',
            frontendURL: 'https://workspace.cqtestga.com',
            cloudStorageUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
            sessionCookieConfig: {
                domain: '.cqtestga.com',
                path: '/',
                httpOnly: true,
                secure: true,
            }
        }
    }
    else {
        return {
            host: `http://localhost:${constants.listenPort}`,
            frontendURL: `http://localhost:3000`,
            cloudStorageUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
            sessionCookieConfig: {
                domain: '.localhost',
                path: '/',
                httpOnly: true,
            }
        }
    }
} ( { env: process.env.NODE_ENV } )

const configFromEnv = {
    redisIp: process.env.REDIS_IP,
    redisPort: parseInt(process.env.REDIS_PORT),
    redisPassword: process.env.REDIS_PORT,
    sessionRedisIp: process.env.SESSION_REDIS_IP,
    sessionRedisPort: process.env.SESSION_REDIS_PORT,
    sessionRedisPassword: process.env.SESSION_REDIS_PASSWORD,
    postgresHost: process.env.PG_HOST,
    postgresPort: process.env.PG_PORT,
    postgresUser: process.env.PG_USER,
    postgresPass: process.env.PG_PASSWORD,
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    awsToken: process.env.AWS_TOKEN,
    awsPassword: process.env.AWS_PASSWORD,
    awsRegion: process.env.AWS_REGION,
    awsBucketName: process.env.AWS_BUCKET_NAME,
}

const config = Object.freeze({...baseConfig, ...configFromEnv});

module.exports = config
