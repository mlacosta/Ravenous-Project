const apiKey = '-wyO62pMOThWcdf4ItuRtCR2Jkny8UaaGa9w4by1cRiFurYbQe27EeFMZV-f_6IhoRwKiFdKG21RfTiKIE84GU6fSA3N8ZgDC15rPP_6rEaFnLh0o355PyMpzBkeX3Yx';

const Yelp = {

    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?
        term=${term}&location=${location}&sort_by=${sortBy}`,
        { headers: {Authorization: `Bearer ${apiKey}`}}).then(
            (response)=>{
                return response.json();

            }
        ).then(
            (jsonResponse)=>{
                if(jsonResponse.businesses){
                    jsonResponse.businesses.map((business)=>{
                        return (
                            {
                                id: business['id'],
                                imageSrc:business['image_url'],
                                name: business['name'],
                                adress:business['location']['address1'],
                                city:business['location']['city'],
                                state:business['location']['state'],
                                zipCode:business['location']['zip_code'],
                                category:business['categories']['title'],
                                rating:business['rating'],
                                reviewCount:business['review_count']
                            }
                        )
                    });
                }
            }
        )
    }

};

