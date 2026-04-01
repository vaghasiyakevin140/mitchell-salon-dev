import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialLinks extends Schema.Component {
  collectionName: 'components_social_links';
  info: {
    displayName: 'Links';
    icon: 'code';
  };
  attributes: {
    link: Attribute.String;
    isExternal: Attribute.Boolean;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
    ogTitle: Attribute.Text;
    ogDescription: Attribute.Text;
    ogImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Twitter']> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsYourCareerSection extends Schema.Component {
  collectionName: 'components_components_your_career_sections';
  info: {
    displayName: 'Your Career Section';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.Blocks;
    careers: Attribute.Relation<
      'components.your-career-section',
      'oneToMany',
      'api::career.career'
    >;
  };
}

export interface ComponentsTitleDescriptionImageWithCtaSection
  extends Schema.Component {
  collectionName: 'components_components_title_description_image_with_cta_sections';
  info: {
    displayName: 'Title Description Image with Cta Section';
    icon: 'wheelchair';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    variant: Attribute.Enumeration<['left', 'right']>;
    label: Attribute.String;
    link: Attribute.String;
    hasPopup: Attribute.Boolean;
  };
}

export interface ComponentsTestimonialSection extends Schema.Component {
  collectionName: 'components_components_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.Text;
    description: Attribute.Text;
    testimonials: Attribute.Relation<
      'components.testimonial-section',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Attribute.Blocks;
    cTA: Attribute.Component<'atoms.button'>;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ComponentsTermsAndPrivacySection extends Schema.Component {
  collectionName: 'components_components_terms_and_privacy_sections';
  info: {
    displayName: 'Terms And Privacy Section';
    icon: 'sun';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    updatedDate: Attribute.Date;
    introductionText: Attribute.Blocks;
    articleIndex: Attribute.Blocks;
    articleContent: Attribute.Blocks;
  };
}

export interface ComponentsStoresSection extends Schema.Component {
  collectionName: 'components_components_stores_sections';
  info: {
    displayName: 'Stores section';
    icon: 'code';
  };
  attributes: {
    location_inners: Attribute.Relation<
      'components.stores-section',
      'oneToMany',
      'api::location-inner.location-inner'
    >;
  };
}

export interface ComponentsSpaOfferCard extends Schema.Component {
  collectionName: 'components_components_spa_offer_cards';
  info: {
    displayName: 'Spa Offer Card';
    icon: 'check';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    title: Attribute.Blocks;
    imageDescriptionImageWithLabel: Attribute.Component<
      'atoms.title-description-image-with-label',
      true
    >;
    variant: Attribute.Enumeration<['primary']>;
  };
}

export interface ComponentsSocialInfoSection extends Schema.Component {
  collectionName: 'components_components_social_info_sections';
  info: {
    displayName: 'Social Info Section';
    icon: 'cube';
  };
  attributes: {
    cta: Attribute.Component<'atoms.button'>;
    socialUserName: Attribute.Blocks;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsSinglePriceSection extends Schema.Component {
  collectionName: 'components_components_single_price_sections';
  info: {
    displayName: 'Single Price Section';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.Blocks;
    description: Attribute.Blocks;
    button: Attribute.Component<'atoms.button'>;
    priceGuide: Attribute.Component<'atoms.price-giude'>;
  };
}

export interface ComponentsServiceSection extends Schema.Component {
  collectionName: 'components_components_service_sections';
  info: {
    displayName: 'Service Section';
    icon: 'apps';
  };
  attributes: {
    contact: Attribute.Blocks;
    cta: Attribute.Component<'atoms.button', true>;
    block: Attribute.Component<'atoms.block-booking', true>;
  };
}

export interface ComponentsSalonServices extends Schema.Component {
  collectionName: 'components_components_salon_services';
  info: {
    displayName: 'Salon Services';
    icon: 'clock';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    salon_types: Attribute.Relation<
      'components.salon-services',
      'oneToMany',
      'api::salon-type.salon-type'
    >;
    cta: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsSalonPricing extends Schema.Component {
  collectionName: 'components_components_salon_pricings';
  info: {
    displayName: 'Salon Pricing';
    icon: 'apps';
    description: '';
  };
  attributes: {
    pricingBlocks: Attribute.Component<'atoms.pricing-blocks', true>;
  };
}

export interface ComponentsReviewsSection extends Schema.Component {
  collectionName: 'components_components_reviews_sections';
  info: {
    displayName: 'Reviews Section';
    icon: 'command';
    description: '';
  };
  attributes: {
    reviewsWithVideoBlock: Attribute.Component<
      'atoms.reviews-with-video',
      true
    >;
    button: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsReleaseForms extends Schema.Component {
  collectionName: 'components_components_release_forms';
  info: {
    displayName: 'Release Forms';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    heading: Attribute.Blocks;
    description: Attribute.Blocks;
    releaseForm: Attribute.Component<'atoms.forms', true>;
  };
}

export interface ComponentsRelatedPackage extends Schema.Component {
  collectionName: 'components_components_related_packages';
  info: {
    displayName: 'Related Package';
    icon: 'feather';
    description: '';
  };
  attributes: {
    package_inners: Attribute.Relation<
      'components.related-package',
      'oneToMany',
      'api::package-inner.package-inner'
    >;
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    variant: Attribute.Enumeration<['spaSubPages']>;
    button: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsRelatedLocation extends Schema.Component {
  collectionName: 'components_components_related_locations';
  info: {
    displayName: 'Related Location';
    icon: 'chartCircle';
  };
  attributes: {
    moreLocations: Attribute.Blocks;
    location_inners: Attribute.Relation<
      'components.related-location',
      'oneToMany',
      'api::location-inner.location-inner'
    >;
  };
}

export interface ComponentsRecommendedTimelineSection extends Schema.Component {
  collectionName: 'components_components_recommended_timeline_sections';
  info: {
    displayName: 'Recommended Timeline Section';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titleDescription: Attribute.Component<'atoms.title-description', true>;
  };
}

export interface ComponentsRecommendationsRecapSection
  extends Schema.Component {
  collectionName: 'components_components_recommendations_recap_sections';
  info: {
    displayName: 'Recommendations Recap Section';
    icon: 'rocket';
    description: '';
  };
  attributes: {
    brideBlock: Attribute.Component<'atoms.bride-block', true>;
  };
}

export interface ComponentsPricePackagesBlock extends Schema.Component {
  collectionName: 'components_components_price_packages_blocks';
  info: {
    displayName: 'Price Packages Block';
    icon: 'cog';
    description: '';
  };
  attributes: {
    packagesBlock: Attribute.Component<'atoms.packages-block', true>;
  };
}

export interface ComponentsPriceGuideSection extends Schema.Component {
  collectionName: 'components_components_price_guide_sections';
  info: {
    displayName: 'Price Guide Section';
    icon: 'filter';
    description: '';
  };
  attributes: {
    priceGuide: Attribute.Component<'atoms.price-giude', true>;
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    cta: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsPrepForPerfectHairSection extends Schema.Component {
  collectionName: 'components_components_prep_for_perfect_hair_sections';
  info: {
    displayName: 'Prep For Perfect Hair Section';
    icon: 'restaurant';
  };
  attributes: {
    title: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconTextBlock: Attribute.Component<'atoms.icon-text-block', true>;
  };
}

export interface ComponentsPackageTestimonial extends Schema.Component {
  collectionName: 'components_components_package_testimonials';
  info: {
    displayName: 'Package Testimonial';
    icon: 'crown';
  };
  attributes: {
    testimonials: Attribute.Relation<
      'components.package-testimonial',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface ComponentsPackageHighlightsSection extends Schema.Component {
  collectionName: 'components_components_package_highlights_section_s';
  info: {
    displayName: 'Package Highlights Section ';
    icon: 'television';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    imagetitleBlock: Attribute.Component<'atoms.title-image-block', true>;
  };
}

export interface ComponentsPackageDetailsHeroSection extends Schema.Component {
  collectionName: 'components_components_package_details_hero_sections';
  info: {
    displayName: 'Package Details Hero Section';
    icon: 'expand';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    priceTag: Attribute.Decimal;
    cta: Attribute.Component<'atoms.button'>;
    variant: Attribute.Enumeration<['inDetailView']>;
    category: Attribute.Enumeration<
      ['Full Day', 'Half Day', 'Time Together', 'Spa']
    >;
  };
}

export interface ComponentsPackageAboutSection extends Schema.Component {
  collectionName: 'components_components_package_about_sections';
  info: {
    displayName: 'Package About Section';
    icon: 'cup';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    titleDescription: Attribute.Component<'atoms.title-description', true>;
  };
}

export interface ComponentsOurServices extends Schema.Component {
  collectionName: 'components_components_our_services';
  info: {
    displayName: 'Our Services';
    icon: 'cog';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    label: Attribute.String;
    services: Attribute.Component<'atoms.all-services', true>;
    button: Attribute.Component<'atoms.button'>;
    sectionImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    funkyText: Attribute.Blocks;
    variant: Attribute.Enumeration<['services']>;
  };
}

export interface ComponentsOurLocationsHero extends Schema.Component {
  collectionName: 'components_components_our_locations_heroes';
  info: {
    displayName: 'Our Locations Hero';
    icon: 'command';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    storesWithHoursTimeList: Attribute.Component<
      'atoms.title-description',
      true
    >;
  };
}

export interface ComponentsMoreBeautyPackagesSection extends Schema.Component {
  collectionName: 'components_components_more_beauty_packages_sections';
  info: {
    displayName: 'More Beauty Packages Section';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    packageBlock: Attribute.Component<'atoms.image-title-link', true>;
  };
}

export interface ComponentsMitchellServicesSection extends Schema.Component {
  collectionName: 'components_components_mitchell_services_sections';
  info: {
    displayName: 'Mitchell Services Section';
    icon: 'key';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    location: Attribute.String;
    imageDescriptionImageWithPriceLabel: Attribute.Component<
      'atoms.image-title-description-with-price-label',
      true
    >;
    ctaName: Attribute.String;
    ctaLink: Attribute.String;
    note: Attribute.String;
  };
}

export interface ComponentsMilitaryAndDonationSection extends Schema.Component {
  collectionName: 'components_components_military_and_donation_sections';
  info: {
    displayName: 'Military and Donation Section';
    icon: 'twitter';
  };
  attributes: {
    leftContent: Attribute.Component<'atoms.image-title-description-with-discount-label'>;
    rightSideContent: Attribute.Component<'atoms.image-title-description-with-discount-label'>;
  };
}

export interface ComponentsMenPricingSection extends Schema.Component {
  collectionName: 'components_components_men_pricing_sections';
  info: {
    displayName: 'Men Pricing Section';
    icon: 'file';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    menPricing: Attribute.Component<'atoms.men-pricing', true>;
    cta: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsLocationMap extends Schema.Component {
  collectionName: 'components_components_location_maps';
  info: {
    displayName: 'Location Map';
    icon: 'cog';
    description: '';
  };
  attributes: {
    locationUrl: Attribute.Blocks;
  };
}

export interface ComponentsLocationInfoSection extends Schema.Component {
  collectionName: 'components_components_location_info_sections';
  info: {
    displayName: 'Location Info Section';
    icon: 'apps';
  };
  attributes: {
    content: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsLocationHeroSection extends Schema.Component {
  collectionName: 'components_components_location_hero_sections';
  info: {
    displayName: 'Location Inner Hero Section';
    icon: 'repeat';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titleContentWithCta: Attribute.Component<
      'atoms.title-content-with-cta',
      true
    >;
    storeNumber: Attribute.Blocks;
    title: Attribute.Blocks;
    relatedAddress: Attribute.Text;
    cta: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsLocationGallerySection extends Schema.Component {
  collectionName: 'components_components_location_gallery_sections';
  info: {
    displayName: 'Location Gallery Section';
    icon: 'stack';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsJoinUsSection extends Schema.Component {
  collectionName: 'components_components_join_us_sections';
  info: {
    displayName: 'Join Us Section';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'atoms.button'>;
    sectionColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    variant: Attribute.Enumeration<['brideBeautyPlanner', 'spaSubpage']>;
    alignment: Attribute.Enumeration<['left', 'right']>;
  };
}

export interface ComponentsImageDescription extends Schema.Component {
  collectionName: 'components_components_image_descriptions';
  info: {
    displayName: 'Image Description';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
    alignment: Attribute.Enumeration<['left', 'right']>;
  };
}

export interface ComponentsHours extends Schema.Component {
  collectionName: 'components_components_hours';
  info: {
    displayName: 'hours';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.Text;
    timing: Attribute.Component<'components.days', true>;
  };
}

export interface ComponentsHolidaySection extends Schema.Component {
  collectionName: 'components_components_holiday_sections';
  info: {
    displayName: 'Holiday Gift Card Section';
    icon: 'archive';
    description: '';
  };
  attributes: {
    gifts_cards: Attribute.Relation<
      'components.holiday-section',
      'oneToMany',
      'api::gifts-card.gifts-card'
    >;
  };
}

export interface ComponentsHireNailTechPersonSection extends Schema.Component {
  collectionName: 'components_components_hire_nail_tech_person_sections';
  info: {
    displayName: 'Hire Nail Tech Person Section';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    locations: Attribute.Component<'atoms.simple-text', true>;
    contentText: Attribute.String;
    formTitle: Attribute.String;
    formPreferenceLocations: Attribute.Component<'atoms.simple-text', true>;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsHeroSection extends Schema.Component {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'alien';
    description: '';
  };
  attributes: {
    heroContent: Attribute.Component<'atoms.hero-content', true>;
  };
}

export interface ComponentsHeroBanner extends Schema.Component {
  collectionName: 'components_components_hero_banners';
  info: {
    displayName: 'Hero Banner';
    icon: 'apps';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    cta: Attribute.Component<'atoms.button', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    funkyText: Attribute.String;
    features: Attribute.Component<'atoms.list', true>;
    variant: Attribute.Enumeration<
      ['desigedForMen', 'bridalServices', 'bridalBeautyPlanner']
    >;
  };
}

export interface ComponentsGiftCardsSection extends Schema.Component {
  collectionName: 'components_components_gift_cards_sections';
  info: {
    displayName: 'Gift Cards Section';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.Blocks;
    description: Attribute.Text;
    imageDescriptionImageWithLabel: Attribute.Component<
      'atoms.title-description-image-with-label',
      true
    >;
  };
}

export interface ComponentsFourOFourSection extends Schema.Component {
  collectionName: 'components_components_four_o_four_sections';
  info: {
    displayName: 'Four O Four Section';
    icon: 'priceTag';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentsExperienceSection extends Schema.Component {
  collectionName: 'components_components_experience_sections';
  info: {
    displayName: 'Experience Section';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    experienceBlock: Attribute.Component<'atoms.experience-block', true>;
  };
}

export interface ComponentsExcellenceSection extends Schema.Component {
  collectionName: 'components_components_excellence_sections';
  info: {
    displayName: 'Excellence Section';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    titleImageContent: Attribute.Component<'atoms.title-image-block', true>;
  };
}

export interface ComponentsDrivingSocialSection extends Schema.Component {
  collectionName: 'components_components_driving_social_sections';
  info: {
    displayName: 'Driving Social Section';
    icon: 'car';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    variant: Attribute.Enumeration<
      ['bridalServices', 'bridalBeautyPlaner', 'communityImpact']
    >;
    featuresTitle: Attribute.String;
    features: Attribute.Component<'atoms.list', true>;
  };
}

export interface ComponentsDays extends Schema.Component {
  collectionName: 'components_components_days';
  info: {
    displayName: 'days';
    icon: 'cube';
    description: '';
  };
  attributes: {
    day: Attribute.String;
    time: Attribute.String;
  };
}

export interface ComponentsCorporateDiscountProgrammeSection
  extends Schema.Component {
  collectionName: 'components_components_corporate_discount_programme_sections';
  info: {
    displayName: 'Corporate Discount Programme Section';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    employTitle: Attribute.String;
    discountContent: Attribute.Blocks;
    inquiries: Attribute.Blocks;
    imagePartnerOne: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imagePartnerSecond: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentsContactUsSection extends Schema.Component {
  collectionName: 'components_components_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
    icon: 'phone';
    description: '';
  };
  attributes: {
    description: Attribute.Blocks;
    Connect_links: Attribute.Component<'atoms.label-links', true>;
    Links: Attribute.Component<'atoms.title-text', true>;
  };
}

export interface ComponentsCommunitiesSection extends Schema.Component {
  collectionName: 'components_components_communities_sections';
  info: {
    displayName: 'Communities Section';
    icon: 'house';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    button: Attribute.Component<'atoms.button'>;
    imageRowOne: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageRowTwo: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageRowThree: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ComponentsCommonHeroSection extends Schema.Component {
  collectionName: 'components_components_common_hero_sections';
  info: {
    displayName: 'Common Hero Section';
    icon: 'crop';
    description: '';
  };
  attributes: {
    titleImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
    sectionTitle: Attribute.String;
    cta: Attribute.Component<'atoms.button'>;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Attribute.Blocks;
    variant: Attribute.Enumeration<
      [
        'contactUs',
        'communityImpact',
        'hairColoring',
        'savings',
        'price-guide',
        'motherGiftCard',
        'packages',
        'careers',
        'service',
        'aboutUs'
      ]
    >;
    button: Attribute.Component<'atoms.button'>;
    videoThumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsCategory extends Schema.Component {
  collectionName: 'components_components_categories';
  info: {
    displayName: 'Package Category';
    icon: 'cog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    package_inners: Attribute.Relation<
      'components.category',
      'oneToMany',
      'api::package-inner.package-inner'
    >;
    isFilter: Attribute.Boolean;
    applyCategoryFilter: Attribute.Boolean;
  };
}

export interface ComponentsCareersSalonProgramSection extends Schema.Component {
  collectionName: 'components_components_careers_salon_program_sections';
  info: {
    displayName: 'Careers Salon Program Section';
    icon: 'stack';
    description: '';
  };
  attributes: {
    description: Attribute.Blocks;
    faq: Attribute.Component<'atoms.faq', true>;
    bottomText: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.Blocks;
  };
}

export interface ComponentsCareersNailTrainingSection extends Schema.Component {
  collectionName: 'components_components_careers_nail_training_sections';
  info: {
    displayName: 'Careers Nail Training Section';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
    repeatableTexts: Attribute.Component<'atoms.multi-texts', true>;
    bottomDescription: Attribute.Blocks;
    mainTitle: Attribute.Blocks;
  };
}

export interface ComponentsCareersFaqSection extends Schema.Component {
  collectionName: 'components_components_careers_faq_sections';
  info: {
    displayName: 'Careers FAQ Section';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    faq: Attribute.Component<'atoms.faq', true>;
    variant: Attribute.Enumeration<['isCareer']>;
  };
}

export interface ComponentsCareersFamilySection extends Schema.Component {
  collectionName: 'components_components_careers_family_sections';
  info: {
    displayName: 'Careers Family Section';
    icon: 'bulletList';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    bottomText: Attribute.String;
    description: Attribute.Blocks;
    button: Attribute.Component<'atoms.button'>;
    funkyText: Attribute.String;
  };
}

export interface ComponentsCareersDiscoverSection extends Schema.Component {
  collectionName: 'components_components_careers_discover_sections';
  info: {
    displayName: 'Careers Discover Section';
    icon: 'clock';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'atoms.button'>;
    mainTitle: Attribute.Blocks;
    features: Attribute.Component<'atoms.list', true>;
  };
}

export interface ComponentsCareersConnectionSection extends Schema.Component {
  collectionName: 'components_components_careers_connection_sections';
  info: {
    displayName: 'Careers Connection Section';
    icon: 'connector';
    description: '';
  };
  attributes: {
    leftImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
    button: Attribute.Component<'atoms.button'>;
    rightSideImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightSideContent: Attribute.Blocks;
    mainTitle: Attribute.Blocks;
    funkyText: Attribute.Blocks;
  };
}

export interface ComponentsCareersBenefitsSection extends Schema.Component {
  collectionName: 'components_components_careers_benefits_sections';
  info: {
    displayName: 'Careers Benefits Section';
    icon: 'train';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    sectionTitle: Attribute.String;
    iconWithTexts: Attribute.Component<'atoms.icon-text-block', true>;
  };
}

export interface ComponentsCardListeningSection extends Schema.Component {
  collectionName: 'components_components_card_listening_sections';
  info: {
    displayName: 'Card Listening Section';
    icon: 'database';
    description: '';
  };
  attributes: {
    services: Attribute.Relation<
      'components.card-listening-section',
      'oneToMany',
      'api::service.service'
    >;
    description: Attribute.Blocks;
  };
}

export interface ComponentsBridalServiceSection extends Schema.Component {
  collectionName: 'components_components_bridal_service_sections';
  info: {
    displayName: 'Bridal Service Section';
    icon: 'expand';
    description: '';
  };
  attributes: {
    informationText: Attribute.Blocks;
    cta: Attribute.Component<'atoms.button', true>;
    serviceBlock: Attribute.Component<'atoms.services-block', true>;
    bookingTermsAndCondition: Attribute.Component<'components.booking-terms-and-condition'>;
  };
}

export interface ComponentsBookingTermsAndCondition extends Schema.Component {
  collectionName: 'components_components_booking_terms_and_conditions';
  info: {
    displayName: 'bookingTermsAndCondition';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    points: Attribute.Component<'atoms.list', true>;
  };
}

export interface ComponentsBookNow extends Schema.Component {
  collectionName: 'components_components_book_nows';
  info: {
    displayName: 'Book Now';
    icon: 'command';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.Blocks;
    description: Attribute.Text;
    leftSideImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightSideImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    funkyText: Attribute.Blocks;
    cta: Attribute.Component<'atoms.button'>;
    rightSideDescription: Attribute.Blocks;
    varient: Attribute.Enumeration<
      ['giftPage', 'brides', 'blog', 'service', 'blogInner']
    >;
    rightSideSectionTitle: Attribute.String;
  };
}

export interface ComponentsBlogofContent extends Schema.Component {
  collectionName: 'components_components_blogof_contents';
  info: {
    displayName: 'BlogofContent';
    icon: 'cog';
    description: '';
  };
  attributes: {
    introducationText: Attribute.Blocks;
    startContent: Attribute.Blocks;
    middleText: Attribute.Blocks;
    relatedServices: Attribute.Component<'atoms.related-blog-service'>;
    endText: Attribute.Blocks;
    blog_news_letter: Attribute.Relation<
      'components.blogof-content',
      'oneToOne',
      'api::blog-news-letter.blog-news-letter'
    >;
    articleCardList: Attribute.Component<'atoms.list', true>;
    videoURL: Attribute.Text;
  };
}

export interface ComponentsBlogListingSection extends Schema.Component {
  collectionName: 'components_components_blog_listing_sections';
  info: {
    displayName: 'Blog Listing Section';
  };
  attributes: {
    blog_inners: Attribute.Relation<
      'components.blog-listing-section',
      'oneToMany',
      'api::blog-inner.blog-inner'
    >;
  };
}

export interface ComponentsBlogListingHero extends Schema.Component {
  collectionName: 'components_components_blog_listing_heroes';
  info: {
    displayName: 'Blog Listing Hero';
    icon: 'rocket';
  };
  attributes: {
    blog_inner: Attribute.Relation<
      'components.blog-listing-hero',
      'oneToOne',
      'api::blog-inner.blog-inner'
    >;
  };
}

export interface ComponentsBlogHero extends Schema.Component {
  collectionName: 'components_components_blog_heroes';
  info: {
    displayName: 'Blog Hero';
    icon: 'shield';
  };
  attributes: {
    blogTitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.Blocks;
    description: Attribute.Text;
    author: Attribute.Relation<
      'components.blog-hero',
      'oneToOne',
      'api::author.author'
    >;
  };
}

export interface ComponentsBlogContent extends Schema.Component {
  collectionName: 'components_components_blog_contents';
  info: {
    displayName: 'Blog Content';
    icon: 'store';
    description: '';
  };
  attributes: {
    introducationText: Attribute.Blocks;
    newsLetter: Attribute.Component<'atoms.news-letter-section'>;
    middleText: Attribute.Blocks;
    relatedServices: Attribute.Component<'atoms.related-blog-service'>;
    endText: Attribute.Blocks;
    authorConclusion: Attribute.Component<'atoms.author-conclusion'>;
    shareText: Attribute.Text;
    articleShareLInks: Attribute.Component<'social.links', true>;
  };
}

export interface ComponentsBeautifulBridesSection extends Schema.Component {
  collectionName: 'components_components_beautiful_brides_sections';
  info: {
    displayName: 'Beautiful Brides Section';
    icon: 'clock';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    bridalImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    funkyText: Attribute.String;
  };
}

export interface ComponentsAwardsCardSection extends Schema.Component {
  collectionName: 'components_components_awards_card_sections';
  info: {
    displayName: 'Awards Card Section';
    icon: 'chartCircle';
  };
  attributes: {
    title: Attribute.Blocks;
    awards_cards: Attribute.Relation<
      'components.awards-card-section',
      'oneToMany',
      'api::awards-card.awards-card'
    >;
  };
}

export interface ComponentsArticleRelated extends Schema.Component {
  collectionName: 'components_components_article_relateds';
  info: {
    displayName: 'Article Related';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    blog_inners: Attribute.Relation<
      'components.article-related',
      'oneToMany',
      'api::blog-inner.blog-inner'
    >;
    title: Attribute.String;
  };
}

export interface ComponentsArticleListingSection extends Schema.Component {
  collectionName: 'components_components_article_listing_sections';
  info: {
    displayName: 'Article Listing Section';
    icon: 'server';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.Blocks;
    description: Attribute.Blocks;
    button: Attribute.Component<'atoms.button'>;
    blogs: Attribute.Relation<
      'components.article-listing-section',
      'oneToMany',
      'api::blog-inner.blog-inner'
    >;
  };
}

export interface ComponentsAmenitiesSection extends Schema.Component {
  collectionName: 'components_components_amenities_sections';
  info: {
    displayName: 'Amenities Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    features: Attribute.Component<'atoms.simple-text', true>;
    rightFeatures: Attribute.Component<
      'atoms.title-description-accordian',
      true
    >;
  };
}

export interface ComponentsAddress extends Schema.Component {
  collectionName: 'components_components_addresses';
  info: {
    displayName: 'address';
    icon: 'brush';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ComponentsAccordionSection extends Schema.Component {
  collectionName: 'components_components_accordion_sections';
  info: {
    displayName: 'Accordion Section';
    icon: 'briefcase';
  };
  attributes: {
    Accordion: Attribute.Component<'atoms.title-description-accordian', true>;
  };
}

export interface ComponentsAboutUs extends Schema.Component {
  collectionName: 'components_components_about_uses';
  info: {
    displayName: 'About Us';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    titleDescription: Attribute.Component<'atoms.title-description', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    funkyText: Attribute.Blocks;
  };
}

export interface AtomsTitleWithImageLabelLink extends Schema.Component {
  collectionName: 'components_atoms_title_with_image_label_links';
  info: {
    displayName: 'Title With Image LabelLink';
    icon: 'eye';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    imageLabelLink: Attribute.Component<'atoms.image-label-link', true>;
    link: Attribute.String;
  };
}

export interface AtomsTitleText extends Schema.Component {
  collectionName: 'components_atoms_title_texts';
  info: {
    displayName: 'Title Text';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String;
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface AtomsTitleLabelLink extends Schema.Component {
  collectionName: 'components_atoms_title_label_links';
  info: {
    displayName: 'TitleLabelLink';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface AtomsTitleImageLabelLinkArray extends Schema.Component {
  collectionName: 'components_atoms_title_image_label_link_arrays';
  info: {
    displayName: 'Title Image Label Link Array';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.Blocks;
    labelLInk: Attribute.Component<'atoms.label-links', true>;
    link: Attribute.String;
  };
}

export interface AtomsTitleImageBlock extends Schema.Component {
  collectionName: 'components_atoms_title_image_blocks';
  info: {
    displayName: 'titleImageBlock';
    icon: 'filePdf';
  };
  attributes: {
    heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.Blocks;
  };
}

export interface AtomsTitleDescription extends Schema.Component {
  collectionName: 'components_atoms_title_descriptions';
  info: {
    displayName: 'Title Description';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaTitle: Attribute.String;
    ctaLink: Attribute.String;
  };
}

export interface AtomsTitleDescriptionImageWithLabel extends Schema.Component {
  collectionName: 'components_atoms_title_description_image_with_labels';
  info: {
    displayName: 'Title Description Image with Label';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Attribute.String;
    link: Attribute.String;
    funkyText: Attribute.Blocks;
  };
}

export interface AtomsTitleDescriptionAccordian extends Schema.Component {
  collectionName: 'components_atoms_title_description_accordians';
  info: {
    displayName: 'Title Description Accordian';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface AtomsTitleContentWithCta extends Schema.Component {
  collectionName: 'components_atoms_title_content_with_ctas';
  info: {
    displayName: 'Title Content With Cta';
    icon: 'cube';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    content: Attribute.Blocks;
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface AtomsSubNav extends Schema.Component {
  collectionName: 'components_atoms_sub_navs';
  info: {
    displayName: 'Sub Nav';
    icon: 'arrowLeft';
    description: '';
  };
  attributes: {
    salonAndSpa: Attribute.Relation<
      'atoms.sub-nav',
      'oneToOne',
      'api::salon-and-spa-sub-nav.salon-and-spa-sub-nav'
    >;
    brides_sub_nav: Attribute.Relation<
      'atoms.sub-nav',
      'oneToOne',
      'api::brides-sub-nav.brides-sub-nav'
    >;
    about_sub_nav: Attribute.Relation<
      'atoms.sub-nav',
      'oneToOne',
      'api::about-sub-nav.about-sub-nav'
    >;
    package_sun_nav: Attribute.Relation<
      'atoms.sub-nav',
      'oneToOne',
      'api::package-sun-nav.package-sun-nav'
    >;
    gifts_sub_nav: Attribute.Relation<
      'atoms.sub-nav',
      'oneToOne',
      'api::gifts-sub-nav.gifts-sub-nav'
    >;
  };
}

export interface AtomsSpaOfferCard extends Schema.Component {
  collectionName: 'components_atoms_spa_offer_cards';
  info: {
    displayName: 'Spa Offer Card';
    icon: 'bell';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardTitle: Attribute.Blocks;
  };
}

export interface AtomsSocialLinks extends Schema.Component {
  collectionName: 'components_atoms_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.String;
    hoverImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AtomsSimpleText extends Schema.Component {
  collectionName: 'components_atoms_simple_texts';
  info: {
    displayName: 'simpleText';
  };
  attributes: {
    string: Attribute.String;
  };
}

export interface AtomsServices extends Schema.Component {
  collectionName: 'components_atoms_services';
  info: {
    displayName: 'Services';
    icon: 'television';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
    titleWithImagePriceLabel: Attribute.Component<'atoms.image-title-description-with-price-label'>;
  };
}

export interface AtomsServicesBlock extends Schema.Component {
  collectionName: 'components_atoms_services_blocks';
  info: {
    displayName: 'Services Block';
    icon: 'rotate';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    bride_services: Attribute.Relation<
      'atoms.services-block',
      'oneToMany',
      'api::bride-service.bride-service'
    >;
    note: Attribute.Text;
    titleInRichtext: Attribute.Blocks;
  };
}

export interface AtomsReviewsWithVideo extends Schema.Component {
  collectionName: 'components_atoms_reviews_with_videos';
  info: {
    displayName: 'Reviews With Video';
    icon: 'cog';
    description: '';
  };
  attributes: {
    reviewsVideos: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reviewTexts: Attribute.String;
    author: Attribute.Relation<
      'atoms.reviews-with-video',
      'oneToOne',
      'api::author.author'
    >;
    reviewStar: Attribute.Integer;
    hasReviewsFor: Attribute.Enumeration<['salon', 'spa', 'brides']>;
    publishDate: Attribute.Date;
    instaIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    instaUserName: Attribute.String;
  };
}

export interface AtomsReviewWithVideoBlock extends Schema.Component {
  collectionName: 'components_atoms_review_with_video_blocks';
  info: {
    displayName: 'Review With Video Block';
    icon: 'cog';
    description: '';
  };
  attributes: {
    reviewsWithVideoBlock: Attribute.Component<
      'atoms.reviews-with-video',
      true
    >;
  };
}

export interface AtomsRelatedBlogService extends Schema.Component {
  collectionName: 'components_atoms_related_blog_services';
  info: {
    displayName: 'Related Blog Service';
    icon: 'command';
  };
  attributes: {
    sectionTitle: Attribute.String;
    title: Attribute.Blocks;
    priceTag: Attribute.Decimal;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AtomsPricingTable extends Schema.Component {
  collectionName: 'components_atoms_pricing_tables';
  info: {
    displayName: 'Pricing Table';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    serviceName: Attribute.String;
    masterDesignerOrMasterNailTechnicianOrMasterEsthetician: Attribute.Float;
    salonDirectorOrNailDirectorOrEstheticianDirector: Attribute.Float;
    artisticDirectorOrArtisticNailDirector: Attribute.Float;
    seniorArtisticDirectorOrSeniorArtisticNailDirector: Attribute.Float;
    hasNew: Attribute.Boolean;
    designerOrNailTechnicianOrEsthetician: Attribute.Float;
    requiredNote: Attribute.Text;
    pricing_table_tags: Attribute.Relation<
      'atoms.pricing-table',
      'oneToMany',
      'api::pricing-table-tag.pricing-table-tag'
    >;
    description: Attribute.Blocks;
  };
}

export interface AtomsPricingBlocks extends Schema.Component {
  collectionName: 'components_atoms_pricing_blocks';
  info: {
    displayName: 'Pricing blocks';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    price_tables: Attribute.Relation<
      'atoms.pricing-blocks',
      'oneToMany',
      'api::price-table.price-table'
    >;
    title: Attribute.String;
    sectionColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    price_table_heading: Attribute.Relation<
      'atoms.pricing-blocks',
      'oneToOne',
      'api::price-table-heading.price-table-heading'
    >;
  };
}

export interface AtomsPricePackages extends Schema.Component {
  collectionName: 'components_atoms_price_packages';
  info: {
    displayName: 'Price Packages';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    packagesNote: Attribute.String;
    title: Attribute.String;
    description: Attribute.Blocks;
    timings: Attribute.String;
    prices: Attribute.Float;
    priceRange: Attribute.String;
    perPerson: Attribute.Boolean;
  };
}

export interface AtomsPriceGiude extends Schema.Component {
  collectionName: 'components_atoms_price_giudes';
  info: {
    displayName: 'Price Giude';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    price_guides: Attribute.Relation<
      'atoms.price-giude',
      'oneToMany',
      'api::price-guide.price-guide'
    >;
    noteGuide: Attribute.Blocks;
    price_table_heading: Attribute.Relation<
      'atoms.price-giude',
      'oneToOne',
      'api::price-table-heading.price-table-heading'
    >;
  };
}

export interface AtomsPackagesBlock extends Schema.Component {
  collectionName: 'components_atoms_packages_blocks';
  info: {
    displayName: 'Packages Block';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    pricing_packages: Attribute.Relation<
      'atoms.packages-block',
      'oneToMany',
      'api::pricing-package.pricing-package'
    >;
    sectionColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface AtomsNewsLetterSection extends Schema.Component {
  collectionName: 'components_atoms_news_letter_sections';
  info: {
    displayName: 'News Letter Section';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    sectionTitle: Attribute.String;
  };
}

export interface AtomsMultiTexts extends Schema.Component {
  collectionName: 'components_atoms_multi_texts';
  info: {
    displayName: 'Multi texts';
    icon: 'discuss';
  };
  attributes: {
    description: Attribute.Blocks;
  };
}

export interface AtomsMenPricing extends Schema.Component {
  collectionName: 'components_atoms_men_pricings';
  info: {
    displayName: 'Men Pricing';
    icon: 'typhoon';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    men_pricings: Attribute.Relation<
      'atoms.men-pricing',
      'oneToMany',
      'api::men-pricing.men-pricing'
    >;
    note: Attribute.Text;
  };
}

export interface AtomsList extends Schema.Component {
  collectionName: 'components_atoms_lists';
  info: {
    displayName: 'list';
    icon: 'bell';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface AtomsLabelLinks extends Schema.Component {
  collectionName: 'components_atoms_label_links';
  info: {
    displayName: 'Label Links';
    icon: 'cog';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface AtomsImageTitleLink extends Schema.Component {
  collectionName: 'components_atoms_image_title_links';
  info: {
    displayName: 'Image Title Link';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.String;
  };
}

export interface AtomsImageTitleDescription extends Schema.Component {
  collectionName: 'components_atoms_image_title_descriptions';
  info: {
    displayName: 'Image Title Description';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.String;
    title: Attribute.Blocks;
  };
}

export interface AtomsImageTitleDescriptionWithPriceLabel
  extends Schema.Component {
  collectionName: 'components_atoms_image_title_description_with_price_labels';
  info: {
    displayName: 'Image Title Description With Price Label';
    icon: 'store';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
    priceTag: Attribute.String;
  };
}

export interface AtomsImageTitleDescriptionWithDiscountLabel
  extends Schema.Component {
  collectionName: 'components_atoms_image_title_description_with_discount_labels';
  info: {
    displayName: 'Image Title Description With Discount Label';
    icon: 'command';
  };
  attributes: {
    discountLabel: Attribute.Blocks;
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface AtomsImageTitleBlock extends Schema.Component {
  collectionName: 'components_atoms_image_title_blocks';
  info: {
    displayName: 'Image title Block';
    icon: 'command';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface AtomsImageLabelLink extends Schema.Component {
  collectionName: 'components_atoms_image_label_links';
  info: {
    displayName: 'Image Label Link';
    icon: 'earth';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface AtomsIconTextBlock extends Schema.Component {
  collectionName: 'components_atoms_icon_text_blocks';
  info: {
    displayName: 'IconTextBlock';
    icon: 'slideshow';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    texts: Attribute.String;
  };
}

export interface AtomsHeroContent extends Schema.Component {
  collectionName: 'components_atoms_hero_contents';
  info: {
    displayName: 'Hero Content';
    description: '';
  };
  attributes: {
    category: Attribute.String;
    button: Attribute.Component<'atoms.button', true>;
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroTitle: Attribute.Blocks;
    bannerVariant: Attribute.Enumeration<['primary']>;
  };
}

export interface AtomsHeaderLink extends Schema.Component {
  collectionName: 'components_atoms_header_links';
  info: {
    displayName: 'Header Link';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
    subNav: Attribute.Component<'atoms.sub-nav', true>;
  };
}

export interface AtomsForms extends Schema.Component {
  collectionName: 'components_atoms_forms';
  info: {
    displayName: 'forms';
    icon: 'filePdf';
  };
  attributes: {
    title: Attribute.Text;
    formLinks: Attribute.Component<'atoms.image-label-link', true>;
  };
}

export interface AtomsFormLabelLink extends Schema.Component {
  collectionName: 'components_atoms_form_label_links';
  info: {
    displayName: 'formLabelLink';
    icon: 'cube';
  };
  attributes: {
    label: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Text;
  };
}

export interface AtomsFooterSubNavLinks extends Schema.Component {
  collectionName: 'components_atoms_footer_sub_nav_links';
  info: {
    displayName: 'Footer Sub Nav Links';
    icon: 'envelop';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    hasNewLocation: Attribute.Boolean;
  };
}

export interface AtomsFooterSubLinks extends Schema.Component {
  collectionName: 'components_atoms_footer_sub_links';
  info: {
    displayName: 'Footer Sub Links';
  };
  attributes: {
    footerSubLInks: Attribute.Component<'atoms.footer-sub-nav-links', true>;
  };
}

export interface AtomsFooterLinks extends Schema.Component {
  collectionName: 'components_atoms_footer_links';
  info: {
    displayName: 'Footer Links';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    labelLink: Attribute.Component<'atoms.label-links', true>;
    isColoum: Attribute.Enumeration<['First', 'Second', 'Third', 'Fourth']>;
    link: Attribute.String;
  };
}

export interface AtomsFaq extends Schema.Component {
  collectionName: 'components_atoms_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'connector';
  };
  attributes: {
    questions: Attribute.String;
    answer: Attribute.Blocks;
  };
}

export interface AtomsExperienceBlock extends Schema.Component {
  collectionName: 'components_atoms_experience_blocks';
  info: {
    displayName: 'Experience Block';
    icon: 'feather';
  };
  attributes: {
    title: Attribute.Blocks;
    year: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AtomsDesignForMenPricing extends Schema.Component {
  collectionName: 'components_atoms_design_for_men_pricings';
  info: {
    displayName: 'Design For men Pricing';
    icon: 'scissors';
  };
  attributes: {
    heading: Attribute.String;
    men_pricings: Attribute.Relation<
      'atoms.design-for-men-pricing',
      'oneToMany',
      'api::men-pricing.men-pricing'
    >;
  };
}

export interface AtomsConnectLinks extends Schema.Component {
  collectionName: 'components_atoms_connect_links';
  info: {
    displayName: 'Connect Links';
    icon: 'file';
    description: '';
  };
  attributes: {
    labelLinks: Attribute.Component<'atoms.label-links', true>;
  };
}

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.Text;
    kind: Attribute.Enumeration<
      [
        'withArrow',
        'white',
        'black',
        'withUnderline',
        'lightGreen',
        'darkIvory'
      ]
    >;
    isExternal: Attribute.Boolean;
    hasPopup: Attribute.Boolean;
  };
}

export interface AtomsBrideBlock extends Schema.Component {
  collectionName: 'components_atoms_bride_blocks';
  info: {
    displayName: 'Bride Block';
    icon: 'question';
    description: '';
  };
  attributes: {
    category: Attribute.Enumeration<['Hair', 'Skin', 'Nails', 'Massage']>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Blocks;
    funkyText: Attribute.String;
    mainTitle: Attribute.Blocks;
  };
}

export interface AtomsBlockBooking extends Schema.Component {
  collectionName: 'components_atoms_block_bookings';
  info: {
    displayName: 'Block Booking';
    icon: 'chartPie';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Blocks;
    bride_services: Attribute.Relation<
      'atoms.block-booking',
      'oneToMany',
      'api::bride-service.bride-service'
    >;
    notes: Attribute.Text;
    title: Attribute.Blocks;
    bookTitle: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bulletPoints: Attribute.Component<'atoms.list', true>;
  };
}

export interface AtomsAuthorConclusion extends Schema.Component {
  collectionName: 'components_atoms_author_conclusion_s';
  info: {
    displayName: 'Author Conclusion ';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    author: Attribute.Relation<
      'atoms.author-conclusion',
      'oneToOne',
      'api::author.author'
    >;
    description: Attribute.Blocks;
    socialLinks: Attribute.Component<'social.links', true>;
  };
}

export interface AtomsAllServices extends Schema.Component {
  collectionName: 'components_atoms_all_services';
  info: {
    displayName: 'All Services';
    icon: 'bell';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    description: Attribute.String;
    funkyText: Attribute.Blocks;
    label: Attribute.String;
    link: Attribute.String;
    sectionTitle: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social.links': SocialLinks;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'components.your-career-section': ComponentsYourCareerSection;
      'components.title-description-image-with-cta-section': ComponentsTitleDescriptionImageWithCtaSection;
      'components.testimonial-section': ComponentsTestimonialSection;
      'components.terms-and-privacy-section': ComponentsTermsAndPrivacySection;
      'components.stores-section': ComponentsStoresSection;
      'components.spa-offer-card': ComponentsSpaOfferCard;
      'components.social-info-section': ComponentsSocialInfoSection;
      'components.single-price-section': ComponentsSinglePriceSection;
      'components.service-section': ComponentsServiceSection;
      'components.salon-services': ComponentsSalonServices;
      'components.salon-pricing': ComponentsSalonPricing;
      'components.reviews-section': ComponentsReviewsSection;
      'components.release-forms': ComponentsReleaseForms;
      'components.related-package': ComponentsRelatedPackage;
      'components.related-location': ComponentsRelatedLocation;
      'components.recommended-timeline-section': ComponentsRecommendedTimelineSection;
      'components.recommendations-recap-section': ComponentsRecommendationsRecapSection;
      'components.price-packages-block': ComponentsPricePackagesBlock;
      'components.price-guide-section': ComponentsPriceGuideSection;
      'components.prep-for-perfect-hair-section': ComponentsPrepForPerfectHairSection;
      'components.package-testimonial': ComponentsPackageTestimonial;
      'components.package-highlights-section': ComponentsPackageHighlightsSection;
      'components.package-details-hero-section': ComponentsPackageDetailsHeroSection;
      'components.package-about-section': ComponentsPackageAboutSection;
      'components.our-services': ComponentsOurServices;
      'components.our-locations-hero': ComponentsOurLocationsHero;
      'components.more-beauty-packages-section': ComponentsMoreBeautyPackagesSection;
      'components.mitchell-services-section': ComponentsMitchellServicesSection;
      'components.military-and-donation-section': ComponentsMilitaryAndDonationSection;
      'components.men-pricing-section': ComponentsMenPricingSection;
      'components.location-map': ComponentsLocationMap;
      'components.location-info-section': ComponentsLocationInfoSection;
      'components.location-hero-section': ComponentsLocationHeroSection;
      'components.location-gallery-section': ComponentsLocationGallerySection;
      'components.join-us-section': ComponentsJoinUsSection;
      'components.image-description': ComponentsImageDescription;
      'components.hours': ComponentsHours;
      'components.holiday-section': ComponentsHolidaySection;
      'components.hire-nail-tech-person-section': ComponentsHireNailTechPersonSection;
      'components.hero-section': ComponentsHeroSection;
      'components.hero-banner': ComponentsHeroBanner;
      'components.gift-cards-section': ComponentsGiftCardsSection;
      'components.four-o-four-section': ComponentsFourOFourSection;
      'components.experience-section': ComponentsExperienceSection;
      'components.excellence-section': ComponentsExcellenceSection;
      'components.driving-social-section': ComponentsDrivingSocialSection;
      'components.days': ComponentsDays;
      'components.corporate-discount-programme-section': ComponentsCorporateDiscountProgrammeSection;
      'components.contact-us-section': ComponentsContactUsSection;
      'components.communities-section': ComponentsCommunitiesSection;
      'components.common-hero-section': ComponentsCommonHeroSection;
      'components.category': ComponentsCategory;
      'components.careers-salon-program-section': ComponentsCareersSalonProgramSection;
      'components.careers-nail-training-section': ComponentsCareersNailTrainingSection;
      'components.careers-faq-section': ComponentsCareersFaqSection;
      'components.careers-family-section': ComponentsCareersFamilySection;
      'components.careers-discover-section': ComponentsCareersDiscoverSection;
      'components.careers-connection-section': ComponentsCareersConnectionSection;
      'components.careers-benefits-section': ComponentsCareersBenefitsSection;
      'components.card-listening-section': ComponentsCardListeningSection;
      'components.bridal-service-section': ComponentsBridalServiceSection;
      'components.booking-terms-and-condition': ComponentsBookingTermsAndCondition;
      'components.book-now': ComponentsBookNow;
      'components.blogof-content': ComponentsBlogofContent;
      'components.blog-listing-section': ComponentsBlogListingSection;
      'components.blog-listing-hero': ComponentsBlogListingHero;
      'components.blog-hero': ComponentsBlogHero;
      'components.blog-content': ComponentsBlogContent;
      'components.beautiful-brides-section': ComponentsBeautifulBridesSection;
      'components.awards-card-section': ComponentsAwardsCardSection;
      'components.article-related': ComponentsArticleRelated;
      'components.article-listing-section': ComponentsArticleListingSection;
      'components.amenities-section': ComponentsAmenitiesSection;
      'components.address': ComponentsAddress;
      'components.accordion-section': ComponentsAccordionSection;
      'components.about-us': ComponentsAboutUs;
      'atoms.title-with-image-label-link': AtomsTitleWithImageLabelLink;
      'atoms.title-text': AtomsTitleText;
      'atoms.title-label-link': AtomsTitleLabelLink;
      'atoms.title-image-label-link-array': AtomsTitleImageLabelLinkArray;
      'atoms.title-image-block': AtomsTitleImageBlock;
      'atoms.title-description': AtomsTitleDescription;
      'atoms.title-description-image-with-label': AtomsTitleDescriptionImageWithLabel;
      'atoms.title-description-accordian': AtomsTitleDescriptionAccordian;
      'atoms.title-content-with-cta': AtomsTitleContentWithCta;
      'atoms.sub-nav': AtomsSubNav;
      'atoms.spa-offer-card': AtomsSpaOfferCard;
      'atoms.social-links': AtomsSocialLinks;
      'atoms.simple-text': AtomsSimpleText;
      'atoms.services': AtomsServices;
      'atoms.services-block': AtomsServicesBlock;
      'atoms.reviews-with-video': AtomsReviewsWithVideo;
      'atoms.review-with-video-block': AtomsReviewWithVideoBlock;
      'atoms.related-blog-service': AtomsRelatedBlogService;
      'atoms.pricing-table': AtomsPricingTable;
      'atoms.pricing-blocks': AtomsPricingBlocks;
      'atoms.price-packages': AtomsPricePackages;
      'atoms.price-giude': AtomsPriceGiude;
      'atoms.packages-block': AtomsPackagesBlock;
      'atoms.news-letter-section': AtomsNewsLetterSection;
      'atoms.multi-texts': AtomsMultiTexts;
      'atoms.men-pricing': AtomsMenPricing;
      'atoms.list': AtomsList;
      'atoms.label-links': AtomsLabelLinks;
      'atoms.image-title-link': AtomsImageTitleLink;
      'atoms.image-title-description': AtomsImageTitleDescription;
      'atoms.image-title-description-with-price-label': AtomsImageTitleDescriptionWithPriceLabel;
      'atoms.image-title-description-with-discount-label': AtomsImageTitleDescriptionWithDiscountLabel;
      'atoms.image-title-block': AtomsImageTitleBlock;
      'atoms.image-label-link': AtomsImageLabelLink;
      'atoms.icon-text-block': AtomsIconTextBlock;
      'atoms.hero-content': AtomsHeroContent;
      'atoms.header-link': AtomsHeaderLink;
      'atoms.forms': AtomsForms;
      'atoms.form-label-link': AtomsFormLabelLink;
      'atoms.footer-sub-nav-links': AtomsFooterSubNavLinks;
      'atoms.footer-sub-links': AtomsFooterSubLinks;
      'atoms.footer-links': AtomsFooterLinks;
      'atoms.faq': AtomsFaq;
      'atoms.experience-block': AtomsExperienceBlock;
      'atoms.design-for-men-pricing': AtomsDesignForMenPricing;
      'atoms.connect-links': AtomsConnectLinks;
      'atoms.button': AtomsButton;
      'atoms.bride-block': AtomsBrideBlock;
      'atoms.block-booking': AtomsBlockBooking;
      'atoms.author-conclusion': AtomsAuthorConclusion;
      'atoms.all-services': AtomsAllServices;
    }
  }
}
