import Property from "./Property";
import Review from "./Review";
import User from "./User";

User.hasMany(Property, {
    sourceKey: 'userId',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    as: 'properties',
});

User.hasMany(Review, {
    sourceKey: 'userId',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    as: 'reviews',
});

Property.hasMany(Review, {
    sourceKey: 'propertyId',
    foreignKey: 'propertyId',
    onDelete: 'CASCADE',
    as: 'reviews',
});





 Property.belongsTo(User, { foreignKey: 'userId', as: 'user'});
 Review.belongsTo(User, { foreignKey: 'userId', as: 'user'});



// Review.belongsTo(User); //,{foreignKey: 'userId'}
// Review.belongsTo(Property);//,{foreignKey: 'propertyId', as: 'propOfReview'}

export { Property, Review, User}
