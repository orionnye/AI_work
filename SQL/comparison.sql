-- PostgreSQL
SELECT
    route_type,
    COUNT(*) FILTER (WHERE route_long_name NOT LIKE '%Express%') AS total_standard_routes,
    COUNT(*) FILTER (WHERE route_long_name LIKE '%Express%') AS total_express_routes
FROM routes
WHERE route_describe IS NOT NULL AND route_describe <> ''
GROUP BY route_type
HAVING COUNT(*) > 5
ORDER BY total_standard_routes DESC;

-- BIG Query
SELECT
    route_type,
    COUNTIF(REGEXP_REPLACE(route_long_name, r'Express$', '') = route_long_name) AS total_standard_routes,
    COUNTIF(REGEXP_REPLACE(route_long_name, r'Express$', '') != route_long_name) AS total_express_routes
FROM `bigquery-public-data.new_york_subway.routes`
WHERE route_describe IS NOT NULL AND route_describe <> ''
GROUP BY route_type
HAVING COUNT(*) > 5
ORDER BY total_standard_routes DESC;