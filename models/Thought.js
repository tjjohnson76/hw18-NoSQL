const {mongoose, Types, Schema} = require('mongoose');
const formatDate = require("../utils/formatDate")


const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId},
    reactionBody: { type: String, required: true, maxLength: 280},
    username: { type: String, required: true},
    createdAt: { 
        type: Date, default: Date.now,
        get: (timestamp) => formatDate(timestamp)
    },
},{
    toJSON: { getters: true}
});



const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, maxLength: 280},
    createdAt: {
         type: Date, default: Date.now, 
         get: (timestamp) => formatDate(timestamp),
        },
    username: { type: String, required: true},
    reactions: [reactionSchema]
},{
    toJSON: { getters: true, virtuals: true}
});


thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length
})


const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;