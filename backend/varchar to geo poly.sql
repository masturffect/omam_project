/*
Author: Sam Hollingsworth
Updated: 4/24/2020

This query is to update the geometry table for the Polygons
Make sure to change the database name from DigitalHistory if necessary
*/

USE DigitalHistory

DELETE FROM dbo.GEOM_POLYGON

INSERT INTO dbo.GEOM_POLYGON(uniqueid, ORIG_FID, GEOM_POLYGON)
	SELECT uniqueid, ORIG_FID, geometry::STGeomFromText(GEOM_WKT, 0) From dbo.Polygons;