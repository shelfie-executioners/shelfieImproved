UPDATE bins SET name = $3 WHERE shelf = $1 AND bin = $2;
UPDATE bins SET price = $4 WHERE shelf = $1 AND bin = $2;
SELECT * FROM bins WHERE shelf = $1 AND bin = $2;