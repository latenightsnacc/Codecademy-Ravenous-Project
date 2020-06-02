const apiKey = 'bDdh7fIBBX9NxQ0u8_FcWGc675KTIR_iABSFGpfozqcpuvMRAA1TK70cJj_mT7HUE5_tGIfxCfYhaaMnom7rNNsirlOmleuJ5Eg26WH0V6qNlY9XLRusEoNA-RLWXnYx';

const Yelp = {
    search: async (term,location, sortBy) => {
        return await fetch(
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
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.category[0].title,
                            rating: business.rating,
                            reviewCount: business.reviewCount
    
                        }
                    });
                }
            });
    }
};

