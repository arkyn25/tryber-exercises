from wordcloud import WordCloud, STOPWORDS


def generate_wordcloud(input_string, output_file="wordcloud.png"):
    new_stopwords = list(STOPWORDS) + [
        "o",
        "é",
        "de",
        "como",
        "e",
        "para",
        "quem",
        "que",
        "em",
    ]
    result = WordCloud(
        width=1600, height=800, stopwords=new_stopwords
    ).generate(input_string)

    result.to_file(output_file)