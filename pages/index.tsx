import Header from 'components/SiteHeader';
import Filters from 'components/SearchFilters';
import Propertycard from 'components/PropertyCard';
import idcard from 'pages/property/[id]';
import React from "react";

import Link from 'next/link'
import Layout from 'components/Layout';

export default class Home extends React.Component {
  state = {
    property: null

  };
  
  async componentDidMount() {
    const url = "http://localhost:3000/api/properties/all";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ property: data })
  }


  render() {
    return (
      <Layout>
        <div className="px-4">
          <h3 className="text-gray-900 text-xl">Los Angeles</h3>
          <p className="text-gray-600">Live like the stars in these luxurious Southern California estates</p>
        </div>
        <div className="mt-6  sm:px-4  sm:overflow-x-auto">
          <div className="px-4  sm:flex sm:px-4 sm:-ml-2  sm:pb-8">
            <div className="overflow-y-scroll ...">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {this.state.property?.map((item, index) =>
                  <Link key={'property' + item?.propertyId} href='/property/[id]' as={'/property/' + item.propertyId}>
                    <a>
                      <Propertycard
                        propertyName={item?.propertyName || 'name'}
                        price={item?.price || 'price'}
                        description={item?.description || 'description'}
                        picture={item?.picture || 'picture'}
                      // src="https://images.unsplash.com/photo-1512917774080-
                      // 9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

}

