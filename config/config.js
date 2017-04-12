// SERVER
exports.port = process.env.PORT || 3000;
exports.debug = true;

// DATABASE CONFIGURATION
exports.dbName = process.env.SIREN_DB_DEV;
exports.dbUrl = process.env.DATABASE_URL;
exports.dbUser = process.env.POSTGRES_USER;
exports.dbPwd = process.env.POSTGRES_PWD;

// FACEBOOK INTEGRATION
exports.fbAppId = process.env.SIREN_FB_APP_ID;