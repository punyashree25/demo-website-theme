exports.main = (context, sendResponse) => {
    const functionResp = 'Hello! Welcome to Demo Website Theme';

    sendResponse({
        body: functionResp,
        statusCode: 200
    });
};