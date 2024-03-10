const Feedback = require('../models/feedbackModel');

const FeedbackController = {
    submitFeedback: async (req, res) => {
        const { event_id, user_id, feedback_text, rating } = req.body;

        try {
            const result = await Feedback.submitFeedback(event_id, user_id, feedback_text, rating);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getFeedback: async (req, res) => {
        try {
            const feedback = await Feedback.getFeedback();
            res.status(200).json(feedback);
        } catch (error) {
            console.error('Error fetching feedback:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = FeedbackController;
