import axios from 'axios';
export const getPlacesData = async (type: string, sw, ne) => {
  // try {
  //   const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  //     params: {
  //       bl_latitude: sw.lat,
  //       bl_longitude: sw.lng,
  //       tr_longitude: ne.lng,
  //       tr_latitude: ne.lat,
  //     },
  //     headers: {
  //       'x-rapidapi-key': "",
  //       'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  //     },
  //   });

  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }

      const { data } = {
          "data": [
            {
              "location_id": "16667354",
              "name": "Chappi Mountains Homestay Bungalows & Coffee Resting Station",
              "latitude": "12.140835",
              "longitude": "108.631775",
              "num_reviews": "4",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Lac Duong, Lam Dong Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/02/4b/1c/chappi-mountains-resort.jpg",
                    "height": "150"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/02/4b/1c/chappi-mountains-resort.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "4032",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/17/02/4b/1c/chappi-mountains-resort.jpg",
                    "height": "3024"
                  },
                  "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/17/02/4b/1c/chappi-mountains-resort.jpg",
                    "height": "412"
                  },
                  "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/17/02/4b/1c/chappi-mountains-resort.jpg",
                    "height": "188"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2019-03-31T23:17:35-0400",
                "caption": "",
                "id": "386026268",
                "helpful_votes": "0",
                "published_date": "2019-03-31T23:17:35-0400",
                "user": {
                  "user_id": null,
                  "member_id": "0",
                  "type": "user"
                }
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "raw_ranking": "3.0929441452026367",
              "ranking_geo": "Lac Duong",
              "ranking_geo_id": "14759657",
              "ranking_position": "1",
              "ranking_denominator": "1609",
              "ranking_category": "bb",
              "ranking": "#1 Best Value of 1,609 places to stay in Nha Trang",
              "subcategory_type": "small_hotel",
              "subcategory_type_label": "Small Hotel",
              "distance": "18.517496440446912",
              "distance_string": null,
              "bearing": "southwest",
              "rating": "4.5",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$21 - $28",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "465da8d2-2652-4faa-8466-164654a20061"
            },
            {
              "location_id": "17788780",
              "name": "Mega Light Hotel",
              "latitude": "12.25718",
              "longitude": "109.13179",
              "num_reviews": "2",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Nha Trang, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1b/50/04/c7/mega-light-hotel.jpg",
                    "height": "150"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1b/50/04/c7/mega-light-hotel.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "2880",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/1b/50/04/c7/mega-light-hotel.jpg",
                    "height": "2025"
                  },
                  "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1b/50/04/c7/mega-light-hotel.jpg",
                    "height": "387"
                  },
                  "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/1b/50/04/c7/mega-light-hotel.jpg",
                    "height": "176"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2020-05-09T00:47:37-0400",
                "caption": "",
                "id": "458228935",
                "helpful_votes": "0",
                "published_date": "2020-05-09T00:47:37-0400",
                "user": {
                  "user_id": null,
                  "member_id": "0",
                  "type": "user"
                }
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "raw_ranking": "3.06613826751709",
              "ranking_geo": "Nha Trang",
              "ranking_geo_id": "293928",
              "ranking_position": "2",
              "ranking_denominator": "1609",
              "ranking_category": "hotel",
              "ranking": "#2 Best Value of 1,609 places to stay in Nha Trang",
              "subcategory_type": "hotel",
              "subcategory_type_label": "Hotel",
              "distance": "22.460704577310636",
              "distance_string": null,
              "bearing": "east",
              "rating": "5.0",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$10 - $24",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "059b0bea-7722-4204-9513-8de1dd2c4653"
            },
            {
              "location_id": "19617410",
              "name": "Ba Ho Eco Resort",
              "latitude": "12.390017",
              "longitude": "109.137924",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Ninh Hoa, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1b/10/bc/6b/caption.jpg",
                    "height": "150"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1b/10/bc/6b/caption.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/10/bc/6b/caption.jpg",
                    "height": "1280"
                  },
                  "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/1b/10/bc/6b/caption.jpg",
                    "height": "550"
                  },
                  "medium": {
                    "width": "450",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1b/10/bc/6b/caption.jpg",
                    "height": "450"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2020-03-02T23:59:41-0500",
                "caption": "Водопады Ба Хо обязательны к посещению . Ехать с утра и на весь день . Здесь есть все необходимое для отдыха - катамараны , лодочки и тд....ресторан с вкусной и недорогой едой  ! Можно подняться на три  ступени водопадов , в каждом водоём , можно искупаться и сделать пилинг рыбками. Ребята прыгали даже со скал , я не рискнула ))",
                "id": "454081643",
                "helpful_votes": "0",
                "published_date": "2020-03-02T23:59:41-0500",
                "user": {
                  "user_id": null,
                  "member_id": "0",
                  "type": "user"
                }
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "3",
              "ranking_denominator": "1609",
              "ranking": "#3 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "22.307619839416027",
              "distance_string": null,
              "bearing": "east",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$42 - $53",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "8bbcc94f-8ef8-44c9-adf0-41407a5ca48c"
            },
            {
              "location_id": "15011691",
              "name": "Misa Guesthouse",
              "latitude": "12.25585",
              "longitude": "109.09402",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Dien Khanh, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-f/19/ab/66/7f/facadeentrance.jpg",
                    "height": "137"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-t/19/ab/66/7f/facadeentrance.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/19/ab/66/7f/facadeentrance.jpg",
                    "height": "460"
                  },
                  "large": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/19/ab/66/7f/facadeentrance.jpg",
                    "height": "460"
                  },
                  "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-s/19/ab/66/7f/facadeentrance.jpg",
                    "height": "301"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2019-10-17T11:31:13-0400",
                "caption": "Facade/entrance",
                "id": "430663295",
                "helpful_votes": "0",
                "published_date": "2019-10-17T11:31:13-0400",
                "user": null
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "4",
              "ranking_denominator": "1609",
              "ranking": "#4 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "20.037750020437375",
              "distance_string": null,
              "bearing": "east",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$12",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "0baa5a10-e40c-42e8-b01f-bad51ba28711"
            },
            {
              "location_id": "21106942",
              "name": "OYO 995 Tan Thanh Dat Hotel",
              "latitude": "12.47471",
              "longitude": "109.12265",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Nha Trang, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-f/22/0d/a4/cc/caption.jpg",
                    "height": "137"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-t/22/0d/a4/cc/caption.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/22/0d/a4/cc/caption.jpg",
                    "height": "460"
                  },
                  "large": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/22/0d/a4/cc/caption.jpg",
                    "height": "460"
                  },
                  "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-s/22/0d/a4/cc/caption.jpg",
                    "height": "301"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2022-02-11T11:08:53-0500",
                "caption": "",
                "id": "571319500",
                "helpful_votes": "0",
                "published_date": "2022-02-11T11:08:53-0500",
                "user": null
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "5",
              "ranking_denominator": "1609",
              "ranking": "#5 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "22.92105530894745",
              "distance_string": null,
              "bearing": "northeast",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "4dd8e853-fcdc-493a-8638-58b0773b1bb6"
            },
            {
              "location_id": "12791381",
              "name": "Anh Hao Hotel",
              "latitude": "12.492512",
              "longitude": "109.125656",
              "num_reviews": "1",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Ninh Hoa, Khanh Hoa Province",
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "raw_ranking": "3.0258688926696777",
              "ranking_geo": "Ninh Hoa",
              "ranking_geo_id": "12920594",
              "ranking_position": "6",
              "ranking_denominator": "1609",
              "ranking_category": "bb",
              "ranking": "#6 Best Value of 1,609 places to stay in Nha Trang",
              "subcategory_type": "inn",
              "subcategory_type_label": "Inn",
              "distance": "23.61926745486276",
              "distance_string": null,
              "bearing": "northeast",
              "rating": "5.0",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "bc137582-8d9e-4977-a074-5d5760b12c35"
            },
            {
              "location_id": "293928",
              "ad_position": "inline1",
              "ad_size": "8X8",
              "doubleclick_zone": "as.vietnam.khanh_hoa.nha_trang",
              "ancestors": [
                {
                  "subcategory": [
                    {
                      "key": "province",
                      "name": "Province"
                    }
                  ],
                  "name": "Khanh Hoa Province",
                  "abbrv": null,
                  "location_id": "1184689"
                },
                {
                  "subcategory": [
                    {
                      "key": "country",
                      "name": "Country"
                    }
                  ],
                  "name": "Vietnam",
                  "abbrv": null,
                  "location_id": "293921"
                }
              ],
              "detail": "0",
              "page_type": "hotels",
              "mob_ptype": "app_hotels"
            },
            {
              "location_id": "23268427",
              "name": "Nha nghi Huong Thom",
              "latitude": "12.151361",
              "longitude": "109.07109",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Ninh Hoa, Khanh Hoa Province",
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "7",
              "ranking_denominator": "1609",
              "ranking": "#7 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "22.005794900088333",
              "distance_string": null,
              "bearing": "southeast",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "3b3772f3-093a-4271-a431-6c46cf776df6"
            },
            {
              "location_id": "15321078",
              "name": "Diagon Alley Homestay",
              "latitude": "12.260297",
              "longitude": "109.14451",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Nha Trang, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-f/19/b6/f5/aa/2715551.jpg",
                    "height": "137"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-t/19/b6/f5/aa/2715551.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/19/b6/f5/aa/2715551.jpg",
                    "height": "460"
                  },
                  "large": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/19/b6/f5/aa/2715551.jpg",
                    "height": "460"
                  },
                  "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-s/19/b6/f5/aa/2715551.jpg",
                    "height": "301"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2019-10-17T19:16:45-0400",
                "caption": "Diagon Alley Homestay",
                "id": "431420842",
                "helpful_votes": "0",
                "published_date": "2019-10-17T19:16:45-0400",
                "user": null
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "8",
              "ranking_denominator": "1609",
              "ranking": "#8 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "23.236559140207984",
              "distance_string": null,
              "bearing": "east",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$23 - $38",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "55ce6a60-3ccc-4cc0-a711-4d1f5e7a123a"
            },
            {
              "location_id": "1114960",
              "name": "Memento Country Home Resort",
              "latitude": "12.252621",
              "longitude": "109.06524",
              "num_reviews": "30",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Nha Trang, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0a/51/0c/eb/the-mainson.jpg",
                    "height": "150"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/51/0c/eb/the-mainson.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "1000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/51/0c/eb/the-mainson.jpg",
                    "height": "562"
                  },
                  "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/51/0c/eb/the-mainson.jpg",
                    "height": "309"
                  },
                  "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/0a/51/0c/eb/the-mainson.jpg",
                    "height": "141"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2016-02-13T20:46:01-0500",
                "caption": "The Mainson",
                "id": "173083883",
                "helpful_votes": "0",
                "published_date": "2016-02-13T20:46:01-0500",
                "user": {
                  "user_id": null,
                  "member_id": "0",
                  "type": "user"
                }
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "raw_ranking": "3.1971023082733154",
              "ranking_geo": "Nha Trang",
              "ranking_geo_id": "293928",
              "ranking_position": "9",
              "ranking_denominator": "1609",
              "ranking_category": "bb",
              "ranking": "#9 Best Value of 1,609 places to stay in Nha Trang",
              "subcategory_type": "small_hotel",
              "subcategory_type_label": "Small Hotel",
              "distance": "18.26787737328682",
              "distance_string": null,
              "bearing": "east",
              "rating": "4.0",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$20 - $25",
              "hotel_class": "3.0",
              "hotel_class_attribution": "This property is classified according to Giata.",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "570590fc-8cd9-4b6f-a21e-bda888a6bda8"
            },
            {
              "location_id": "17638605",
              "name": "Guest House Thanh Binh",
              "latitude": "12.28163",
              "longitude": "108.92137",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Khanh Vinh, Khanh Hoa Province",
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "10",
              "ranking_denominator": "1609",
              "ranking": "#10 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "8.567854322550199",
              "distance_string": null,
              "bearing": "southeast",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$14",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "6538f489-f141-413d-b4c4-fb4a57c8d874"
            },
            {
              "location_id": "15574313",
              "name": "Farmer's Resort",
              "latitude": "12.26634",
              "longitude": "108.99182",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Dien Thọ, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/a2/13/c4/across-river.jpg",
                    "height": "150"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/a2/13/c4/across-river.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/a2/13/c4/across-river.jpg",
                    "height": "960"
                  },
                  "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/a2/13/c4/across-river.jpg",
                    "height": "413"
                  },
                  "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/a2/13/c4/across-river.jpg",
                    "height": "188"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2019-03-02T10:12:31-0500",
                "caption": "across river",
                "id": "379720644",
                "helpful_votes": "0",
                "published_date": "2019-03-02T10:12:31-0500",
                "user": {
                  "user_id": null,
                  "member_id": "0",
                  "type": "user"
                }
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "11",
              "ranking_denominator": "1609",
              "ranking": "#11 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "13.305339743048233",
              "distance_string": null,
              "bearing": "southeast",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "0814e64a-bede-41d0-8ee8-b60418e67d53"
            },
            {
              "location_id": "20362856",
              "name": "OYO 1015 Bon Mua Hotel",
              "latitude": "12.25979",
              "longitude": "109.11334",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Nha Trang, Khanh Hoa Province",
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "12",
              "ranking_denominator": "1609",
              "ranking": "#12 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "21.21106684791797",
              "distance_string": null,
              "bearing": "east",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$14 - $34",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "1c179a59-3a06-4779-824c-687f6a0a24ec"
            },
            {
              "location_id": "17707459",
              "name": "Casa Blanca Villas",
              "latitude": "12.259272",
              "longitude": "109.1431",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Nha Trang, Khanh Hoa Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-f/21/e4/e0/d2/caption.jpg",
                    "height": "137"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-t/21/e4/e0/d2/caption.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/21/e4/e0/d2/caption.jpg",
                    "height": "460"
                  },
                  "large": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/21/e4/e0/d2/caption.jpg",
                    "height": "460"
                  },
                  "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-s/21/e4/e0/d2/caption.jpg",
                    "height": "301"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2022-01-18T00:27:57-0500",
                "caption": "",
                "id": "568647890",
                "helpful_votes": "0",
                "published_date": "2022-01-18T00:27:57-0500",
                "user": null
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "13",
              "ranking_denominator": "1609",
              "ranking": "#13 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "23.16180801461108",
              "distance_string": null,
              "bearing": "east",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$$$$",
              "price": "$232 - $664",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "78997858-ac3c-42db-b61b-01bc52f57160"
            },
            {
              "location_id": "21504434",
              "name": "Bao My Hotel",
              "latitude": "12.486257",
              "longitude": "109.12736",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Ninh Hiep, Ninh Hoa, Khanh Hoa Province",
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "14",
              "ranking_denominator": "1609",
              "ranking": "#14 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "23.537567114872367",
              "distance_string": null,
              "bearing": "northeast",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "d17d7377-4304-4bff-8ce9-eaf40dd43e59"
            },
            {
              "location_id": "293928",
              "ad_position": "inline2",
              "ad_size": "8X8",
              "doubleclick_zone": "as.vietnam.khanh_hoa.nha_trang",
              "ancestors": [
                {
                  "subcategory": [
                    {
                      "key": "province",
                      "name": "Province"
                    }
                  ],
                  "name": "Khanh Hoa Province",
                  "abbrv": null,
                  "location_id": "1184689"
                },
                {
                  "subcategory": [
                    {
                      "key": "country",
                      "name": "Country"
                    }
                  ],
                  "name": "Vietnam",
                  "abbrv": null,
                  "location_id": "293921"
                }
              ],
              "detail": "0",
              "page_type": "hotels",
              "mob_ptype": "app_hotels"
            },
            {
              "location_id": "18261033",
              "name": "Nha Khach Vuon Quoc Gia Bidoup - Nui Ba",
              "latitude": "12.105029",
              "longitude": "108.55508",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Da Nhim, Lam Dong Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-f/19/a8/f1/5c/4892278.jpg",
                    "height": "137"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-t/19/a8/f1/5c/4892278.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/19/a8/f1/5c/4892278.jpg",
                    "height": "460"
                  },
                  "large": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/19/a8/f1/5c/4892278.jpg",
                    "height": "460"
                  },
                  "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-s/19/a8/f1/5c/4892278.jpg",
                    "height": "301"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2019-10-17T05:35:54-0400",
                "caption": "Nha Khach Vuon Quoc Gia Bidoup - Nui Ba",
                "id": "430502236",
                "helpful_votes": "0",
                "published_date": "2019-10-17T05:35:54-0400",
                "user": null
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "15",
              "ranking_denominator": "1609",
              "ranking": "#15 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "23.896876731770504",
              "distance_string": null,
              "bearing": "southwest",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$19",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "dd68de40-c9da-42fa-9c14-c1a270ac087e"
            },
            {
              "location_id": "15353817",
              "name": "Homestay Da Blah",
              "latitude": "12.105029",
              "longitude": "108.55508",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Lac Duong, Lam Dong Province",
              "photo": {
                "images": {
                  "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-f/1b/5d/12/0f/3936219.jpg",
                    "height": "137"
                  },
                  "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-t/1b/5d/12/0f/3936219.jpg",
                    "height": "50"
                  },
                  "original": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/1b/5d/12/0f/3936219.jpg",
                    "height": "460"
                  },
                  "large": {
                    "width": "840",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/1b/5d/12/0f/3936219.jpg",
                    "height": "460"
                  },
                  "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/partner/bookingcom/photo-s/1b/5d/12/0f/3936219.jpg",
                    "height": "301"
                  }
                },
                "is_blessed": true,
                "uploaded_date": "2020-05-30T23:16:35-0400",
                "caption": "Homestay Da Blah",
                "id": "459084303",
                "helpful_votes": "0",
                "published_date": "2020-05-30T23:16:35-0400",
                "user": null
              },
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "16",
              "ranking_denominator": "1609",
              "ranking": "#16 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "23.896876731770504",
              "distance_string": null,
              "bearing": "southwest",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "$",
              "price": "$11 - $12",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "8a107114-dfa7-4222-b5bc-2eaaef9097ab"
            },
            {
              "location_id": "17537513",
              "name": "Junglebeach",
              "latitude": "12.49512",
              "longitude": "109.13291",
              "num_reviews": "0",
              "timezone": "Asia/Ho_Chi_Minh",
              "location_string": "Ninh Hoa, Khanh Hoa Province",
              "awards": [],
              "preferred_map_engine": "default",
              "autobroaden_type": "category_integrated",
              "autobroaden_label": "Nha Trang Places to Stay",
              "ranking_position": "17",
              "ranking_denominator": "1609",
              "ranking": "#17 Best Value of 1,609 places to stay in Nha Trang",
              "distance": "24.13888025704297",
              "distance_string": null,
              "bearing": "northeast",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "hotel_class": "0.0",
              "business_listings": {
                "desktop_contacts": [],
                "mobile_contacts": []
              },
              "special_offers": {
                "desktop": [],
                "mobile": []
              },
              "listing_key": "7e1daa19-dc8d-4a32-abc0-9866e6da3d58"
            }
          ],
          "status": {
            "unfiltered_total_size": "17",
            "commerce_country_iso_code": "US",
            "autobroadened": true,
            "progress": "100",
            "auction_key": "cbf4a5436a974859a173b4b42c221348",
            "primary_geo": "293928",
            "pricing": "base",
            "doubleClickZone": "as.vietnam.khanh_hoa.nha_trang"
          },
          "paging": {
            "results": "17",
            "total_results": "17"
          }
        }
      console.log(data)
    return data
};