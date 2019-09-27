module.exports = {
    columns: 12,
    outputStyle: 'scss', /* less || scss || sass || styl */
	offset: "30px",
	//mobileFirst: true,
	container: {
        maxWidth: "950px",
        fields: "30px"
    },
	breakPoints: {
		md: {
            width: "920px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "420px",
            /*
            offset: "10px",
            fields: "5px"
            */
        },
        xxss: {
            width: "320px"
        }
	},
    //detailedCalc: true
};