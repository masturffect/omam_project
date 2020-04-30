# Backend Usage Instruction Guide

## How to import the `DB.sql` file in SSMS
1. Right click the file and open with `SSMS 18`
1. If a login screen appears just hit next
1. Hit the execute button directly under tools on the Taskbar

## How to add a row to the MSSQL Database using Excel and SSMS
1. Add the data you wish to add to the Excel spreadsheet, and save your changes
1. In SSMS navigate to `OMAM_MASTER` database and right click it, select `Tasks`, then select `Import Data`
1. When the import export wizard opens, change the data source to `Microsoft Excel`, then hit browse and select the excel file to upload (most likely the Points or Master file), then hit next
1. Change the destination to `Microsoft OLE DB Driver for SQL SERVER` then hit next
1. Hit next on the `Specify Table Copy or Query` page
1. Select the page of the excel spreadsheet to upload (on Points it is called `Database$`, the first option) 
1. Click on the destination and select the table to update _**VERY IMPORTANT**_
1. Hit `Edit Mappings...`, check the `Delete Rows` in destination table box, then hit OK
1. Hit next 3 times
1. Hit Finish
1. If there are no errors then the table has been successfully updated, Hooray

### Troubleshooting
-	If no destination was selected in step 7, a new table will be created instead of updating the old one. To fix this, delete the new table (likely just named `dbo.database` or something similar)
-	If the update fails and the red X is on `Copying To section`, that means the data input did not match the columns on the old table. To fix this, make sure that all columns are filled in correctly and are the correct datatypes. Then restart the process from step 1
-	If you do not select `Delete Rows` under `Edit Mappings...`, it will append every row again to the end of the table. This will cause the update to fail because it cannot have more than one copy of any uniqueid. To fix this, just go back to `Edit Mappings...` and check that box
-	If something else goes wrong _**DO NOT DELETE THE TABLE**_, simply delete the values and follow the steps above again to re-add the correct data

## How to delete all values in a table using SSMS
1. Right click `OMAM_MASTER` and select `New Query`
1. Type in `DELETE * FROM Table_Name` (where `Table-Name` is the name of the table to clear)
1. Then hit the execute button right below the Tools button on the task bar
1. This should have removed all of the values in the table without deleting the table itself

## How to update the geometries in MMSQL
1. Update the Points, Lines, and Polygons following the insert row instructions above
2. Then run the 2 stored procedures by clicking on them and hitting execute. Order does not matter
3. Now the `GEOM_*` tables are updated with the new geometries

## How to format the Excel tables for import (Cruz's Scripts)
Before you begin, you’ll need the following [script files](backend/scripts/) all in the same directory (folder):
- `geo_common.py`
- `points-to-linestring.py`
- `points-to-polygon.py`
- `uniqueid-fix.py`

1. If the excel files are the old Excel-97-2003 `.xls` format, open them in Excel, then go to File > Save As and change the file type (under file name box) to `.xlsx` and hit save (these scripts require the newer format to work)
1. Copy the `.xlsx` files to the same directory (folder) as the scripts
1. Double-click `points-to-linestring.py` to run it. It will ask for a file name. Type in the name of the file which contains the lines data (including the `.xlsx` at the end)
1. Then do the same for `points-to-polygon.py` and type in the name of the polygon data file
1. Finally, do the same for `uniqueid-fix.py` and give it the name of the points data file (the one that has historical events: city, county, etc.)
1. You just need the results of these scripts, which will be named the same as the inputs but have `-out` at the end of the file name. (for example, `LINES-export.xlsx` would become `LINES-export-out.xlsx`). These output files are the ones you need to import for SQL

### Troubleshooting:
- If double clicking the scripts doesn’t run them (for instance if it opens the source code in a text editor), try right clicking the script and going to `Open With...` and look for `Python` or `Python3`. If this isn’t present, it’s possible python is not installed on your system and you’ll need to request the admin for Python3 (and also state you want double click to execute them for convenience)
- If you get an error along the lines of "unrecognized command", try changing the first line of all scripts from `Python` to `Python3`. Python is deprecated now and replaced by Python3, so some systems like mine now install Python3 under the name Python; but some don't, which might be the problem (Windows typically does) (confusing, right?)
