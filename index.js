exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello -- this is V3 of Lambda after Github update !'),
    };
    return response;
};
