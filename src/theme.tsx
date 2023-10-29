import { createTheme } from '@mui/material/styles'
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config.js'
import type {} from '@mui/x-data-grid/themeAugmentation'

const tailwindConfig = resolveConfig(config)
const colors = tailwindConfig.theme?.colors as any

const theme = createTheme({
  typography: {
    fontFamily: "'DM Sans', 'ui-sans-serif', 'system-ui'",
  },
  palette: {
    primary: {
      main: colors.neutral[500],
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        type: 'button',
      },

      styleOverrides: {
        root: {
          fontFamily: " 'Raleway', 'sans-serif' !important",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none',
          borderRadius: 10,
          height: '3rem',
        },
        contained: {
          background: colors.light,
        },
        outlined: {
          border: `1px solid ${colors.light}`,
          color: colors.light,
          '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.light}`,
          },
        },
        text: {
          color: `${colors.light}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 11,
          '& .Mui-focused': {
            border: 0,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0.625rem',
          padding: 0,
          '&.Mui-focused fieldset': {
            borderColor: `${colors.primary} !important`,
          },
        },
        input: {
          '&:focus': {
            borderRadius: '0.625rem',
          },
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        size: 22,
      },
      styleOverrides: {
        root: {
          color: colors.light,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          color: 'red',
          '& .MuiTableCell-root': {
            color: '#005189',
            fontWeight: 900,
            fontSize: '18px',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          color: 'red',
          '& .MuiTableCell-root': {
            color: '#5C6E7F',
            fontWeight: 300,
            fontSize: '16px',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& 	.Mui-checked': {
            '& .MuiSwitch-thumb': {
              background: '#c75b52',
            },
            '+ .MuiSwitch-track': {
              background: '#ffdfd5 !important',
            },
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: '#7A2D26',
          fontWeight: 600,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '.MuiFormControlLabel-label': {
            fontSize: '0.8rem !important',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          color: colors.error[900],
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        slotProps: {
          backdrop: {
            style: {
              background:
                'linear-gradient(180deg, rgba(71, 85, 105, 0.5) 0%, rgba(71, 85, 105, 0.25) 100%)',
              backdropFilter: 'blur(5px)',
            },
          },
        },
      },
      styleOverrides: {
        root: {
          '.MuiDialog-paper': {
            borderRadius: '10px',
            background: 'transparent',
            borderWidth: 0,
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          '.MuiCalendarOrClockPicker-root ': {
            background: 'white',
            borderRadius: 10,
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          border: `0.063rem solid ${tailwindConfig.theme?.borderColor?.default}`,
          margin: '0.5rem',
          borderRadius: '0.5rem',
          padding: '0.625rem',
          color: colors?.neutral['600'],
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `0.063rem solid ${tailwindConfig.theme?.borderColor?.default}`,
          boxShadow: '0px -30px 150px rgba(0, 0, 0, 0.05)',
          borderRadius: '0.5rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          height: '2.125rem',
          textTransform: 'capitalize',
        },
      },
    },
    MuiDataGrid: {
      defaultProps: {
        disableColumnSelector: true,
        disableRowSelectionOnClick: true,
        autoHeight: true,
        disableColumnMenu: true,
        rowSelection: false,
        initialState: {
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        },
        classes: {
          main: 'w-full',
        },
        pageSizeOptions: [5, 10],
        slots: {
          noRowsOverlay: () => (
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <p className="text-2xl">Oops</p>
              <p>No results found!</p>
            </div>
          ),
        },
        density: 'comfortable',
        columnHeaderHeight: 44,
        localeText: {
          toolbarExport: 'Download',
          toolbarFilters: 'Add Filter',
        },
      },
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          overflow: 'hidden',
        },
        columnHeaders: {
          backgroundColor: colors?.light,
          minHeight: 'unset !important',
          maxHeight: 'unset !important',
          borderRadius: 0,
          color: colors?.light,
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 900,
          },
        },
        row: {
          backgroundColor: '#fff',
          color: colors.neutral[500],
          fontFamily: `${tailwindConfig.theme?.fontFamily?.raleway} !important`,
          fontWeight: 500,
          cursor: 'pointer !important',
        },
        cell: {
          outline: 'none !important',
          whiteSpace: 'normal !important' as never,
        },
        columnHeader: {
          paddingInline: '1.5rem',
          outline: 'none !important',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          '&.Mui-selected': {
            color: `${colors.light}`,
          },
        },
      },
    },
  },
})

export default theme
