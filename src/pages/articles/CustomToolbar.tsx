import {
    GridToolbarDensitySelector,
    GridToolbarFilterButton,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid';

const CustomToolbar = () => {
    return (
        <GridToolbarContainer className="flex justify-between">
            <div>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </div>
            <GridToolbarQuickFilter />
        </GridToolbarContainer>
    );
};

export default CustomToolbar;
