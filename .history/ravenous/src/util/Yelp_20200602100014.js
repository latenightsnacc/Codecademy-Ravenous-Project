const apiKey = 'bDdh7fIBBX9NxQ0u8_FcWGc675KTIR_iABSFGpfozqcpuvMRAA1TK70cJj_mT7HUE5_tGIfxCfYhaaMnom7rNNsirlOmleuJ5Eg26WH0V6qNlY9XLRusEoNA-RLWXnYx';

const Yelp = {};

const search = (term,location, sortBy) => {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy});
};
