import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document {
    name: string,
    email:string,
    username:string,
    password:string,
    profilePhoto?: string,
    createdAt: Date,
    lastUpdated: Date,
    comparePassword(entredPassword: string): Promise<boolean> 
}

const UserSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type:String,
        required:true
    },

    profilePhoto:{
        type:String,
    }
},{
    timestamps:true
});

// eslint-disable-next-line func-names, consistent-return
UserSchema.pre("save", async function (next) {
    const user = this as unknown as IUser;

    if(!user.isModified("password")) return next();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    next();
})

UserSchema.methods.comparePassword = function(entredPassword: string) {
    const user = this as IUser;
    return bcrypt.compareSync(entredPassword, user.password);
}

const User = mongoose.model<IUser>("User", UserSchema);

export default User;