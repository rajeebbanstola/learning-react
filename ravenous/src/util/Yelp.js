const apiKey = 'GbawVE78RPF1ctAi4S0fpgf4muixTvqZNK-s0UmeroYZqYofqXh0j71bmgOF6sD8V6UwYpQZ16M0GpEmPyObOoaK35_HJcxXr2NlGhpFQN_tb2bPbR0YLTXGgEFOXHYx';

const Yelp = {
	search(term, location, sortBy) {
	  return fetch(
	      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
	        headers: {
	          Authorization: `Bearer ${apiKey}`
	        }
	      })
	    .then(response => {return response.json();})
	    .then(jsonResponse => {
	        if (jsonResponse.businesses) {
	          return jsonResponse.businesses.map(business => ({
	              id: business.id,
	              imageSrc: business.image_url,
	              name: business.name,
	              address: business.location.address1,
	              city: business.location.city,
	              state: business.location.state,
	              zipCode: business.location.zip_code,
	              category: business.categories[0].title,
	              rating: business.rating,
	              reviewCount: business.review_count,
	              url: business.url,
	              distance: business.distance
	            }));
	          }
	    });
	}
};

  export default Yelp;