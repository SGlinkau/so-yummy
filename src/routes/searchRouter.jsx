import express from 'express';
import { searchController } from '../controllers/search/searchController.jsx';

const router = express.Router();

router.get('/search', searchController);

module.exports = router;
