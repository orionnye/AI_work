import pandas as pd

def rank_by_column(df, target_column, ranking_column):
  """Ranks values within groups based on another column in descending order.

  Args:
    df: The Pandas DataFrame to rank.
    target_column: The column used to group values for ranking.
    ranking_column: The column containing the values to be ranked.

  Returns:
    A DataFrame with a new 'rank' column containing the ranking within each group.
  """

  df["rank"] = df.groupby(target_column)[ranking_column].rank(ascending=False)
  return df

# Example usage:
df = pd.DataFrame({'target_column': [1, 2, 3, 2, 1], 'ranking_column': [10, 9, 8, 7, 6]})
result = rank_by_column(df.copy(), 'target_column', 'ranking_column')
print(result)