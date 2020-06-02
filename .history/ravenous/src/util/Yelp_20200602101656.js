const apiKey = 'bDdh7fIBBX9NxQ0u8_FcWGc675KTIR_iABSFGpfozqcpuvMRAA1TK70cJj_mT7HUE5_tGIfxCfYhaaMnom7rNNsirlOmleuJ5Eg26WH0V6qNlY9XLRusEoNA-RLWXnYx';

const Yelp = {};

export const search = (term,location, sortBy) => {
    return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount

                    }
                });
            }
        });
};

export default Yelp;