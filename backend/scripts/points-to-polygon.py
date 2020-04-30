#!/usr/bin/env python

# Cruz Jean
# converts the POLYGONS_ExportFromArcAttributeTabl format for sql geometry import.
# also simplifies primary keys from string to int.
# run with no args (or just double click execute) to enter interactive mode.
#     this asks for the input file, then generates the output file.
# run with 2 args to specify input and output paths explicitly.

import sys
import geo_common as geo

# -------------------------------------------------------------

type = 'POLYGON'
override_last = True
open_delim = '(('
close_delim = '))'

# -------------------------------------------------------------

if len(sys.argv) == 1:
	p = input('enter input path: ')
	geo.points_to_geometry(type, p, override_last=override_last, open_delim=open_delim, close_delim=close_delim)
elif len(sys.argv) == 2:
	geo.points_to_geometry(type, sys.argv[1], override_last=override_last, open_delim=open_delim, close_delim=close_delim)
elif len(sys.argv) == 3:
	geo.points_to_geometry(type, sys.argv[1], sys.argv[2], override_last=override_last, open_delim=open_delim, close_delim=close_delim)
else:
	print(f"usage: {sys.argv[0]} (input) (output)")
