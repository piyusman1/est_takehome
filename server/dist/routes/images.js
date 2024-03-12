"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const images = [
    { id: 1, url: 'http://placehold.it/240x240&text=img_example1_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 2, url: 'http://placehold.it/240x240&text=img_example2_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 3, url: 'http://placehold.it/240x240&text=img_example3_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 4, url: 'http://placehold.it/240x240&text=img_example4_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 5, url: 'http://placehold.it/240x240&text=img_example5_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 6, url: 'http://placehold.it/240x240&text=img_example6_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 7, url: 'http://placehold.it/240x240&text=img_example7_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 8, url: 'http://placehold.it/240x240&text=img_example8_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 9, url: 'http://placehold.it/240x240&text=img_example9_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 10, url: 'http://placehold.it/240x240&text=img_example10_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 11, url: 'http://placehold.it/240x240&text=img_example11_test', thumbsUp: 0, thumbsDown: 0 },
    { id: 12, url: 'http://placehold.it/240x240&text=img_example12_test', thumbsUp: 0, thumbsDown: 0 },
];
router.get('/images', (req, res) => {
    res.json(images);
});
router.put('/thumbs-up/:id', (req, res) => {
    const imageId = parseInt(req.params.id);
    const image = images.find((img) => img.id === imageId);
    if (image) {
        image.thumbsUp++;
        res.json({
            success: true,
            thumbsUp: image.thumbsUp
        });
    }
    else {
        res
            .status(404)
            .json({ success: false, message: 'Image not found' });
    }
});
router.put('/thumbs-down/:id', (req, res) => {
    const imageId = parseInt(req.params.id);
    //As I am not using DB I am going to find it from the list which I created above
    const image = images.find((img) => img.id === imageId);
    if (image) {
        image.thumbsDown++;
        res.json({ success: true, thumbsDown: image.thumbsDown });
    }
    else {
        res.status(404).json({ success: false, message: 'Image not found' });
    }
});
exports.default = router;
