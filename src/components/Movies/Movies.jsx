import React, { useState, useEffect } from 'react';
import {
    Box,
    CircularProgress,
    useMediaQuery,
    Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movies = () => {
    const { data, error, isFetching } = useGetMoviesQuery();
    console.log(data);

    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size="4rem" />
            </Box>
        );
    }

    if (!data.results.length) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h5">No movies found</Typography>
            </Box>
        );
    }

    if (error) return 'error';

    return (
        <div>
            <MovieList movies={data} />
        </div>
    );
};

export default Movies;
