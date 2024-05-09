import { Card, CardContent, CardMedia, Box, Typography, Rating } from "@mui/material";
import {styled} from "@mui/material";
import { useNavigate } from "react-router";
import BookPlaceholder from '@/assets/images/book-placeholder.png';

const BookItemMui = ({ book }) => {
    const navigate = useNavigate();

    const StyledCard = styled(Card)({
        display: 'flex',
        width: 300,
        height: 146,
        marginBottom: '20px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#f5f5f5',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
    });
    return (

        <div onClick={() => {
            navigate(`/book/${book.id}`);
        }}>
            <StyledCard sx={{ display: 'flex', width: 300, height: 146 }}>
            <CardMedia
                component="img"
                sx={{ width: "40%" }}
                image={book.coverImage || BookPlaceholder}
                alt={book.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginBottom: '8px',
                    }} component="div" variant="h6">
                        {book.title}
                    </Typography>
                    <Rating name="read-only" size="small" value={book.avgRating} precision={0.5} readOnly />
                    
                    <Typography variant="body2" color="text.secondary">
                        {book.views} lượt đọc
                    </Typography>
                </CardContent>
            </Box>
            </StyledCard>
        </div>
    );
};

export default BookItemMui;