/*
Author: Sam Hollingsworth
Updated: 4/24/2020

This query is to update the geometry table for the Lines
Make sure to change the database name from DigitalHistory if necessary
*/

USE DigitalHistory

DELETE from dbo.GEOM_LINE

INSERT INTO dbo.GEOM_LINE(uniqueid, ORIG_FID, GEOM_LINE)
	SELECT uniqueid, ORIG_FID, geometry::STGeomFromText(GEOM_WKT, 0) From dbo.Lines;