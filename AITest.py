import numpy as np
from scipy import sparse


def test_generate_random_graph_sparse():
    n = 100
    k = 5
    p = 0.3
    graph = test_generate_random_graph_sparse(n, k, p)

    assert isinstance(graph, sparse.csr_matrix)
    assert graph.shape == (n, n)
    assert np.isclose(graph.nnz, n * k + p * (n - k) * (n - k - 1) / 2, rtol=0.1)


def test_top_eigenvector():
    # Test against known result
    graph = sparse.csr_matrix([[1, 1, 0], [1, 1, 0], [0, 0, 2]])
    top_eigenvalue, top_eigenvector = compute_top_eigenvector(graph)
    assert np.allclose(top_eigenvalue, 2)
    assert np.allclose(top_eigenvector, [1 / sqrt(2), 1 / sqrt(2), 0])


print("monkey")
