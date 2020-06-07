const isDev = () => process.env.NODE_ENV === 'development';
const isNotDev = () => !isDev();

const isProd = () => process.env.NODE_ENV === 'production';
const isNotProd = () => !isProd();

module.exports = {
	isDev,
	isNotDev,
	isProd,
	isNotProd
};
