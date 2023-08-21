export const DocLinksPage = () => {
  return (
    <div className="flex flex-col p-10 gap-6">
      <h1 className="text-2xl">Полезные ссылки:</h1>
      <div className="flex flex-col gap-3">
        <a
          target="_blank"
          href="https://www.youtube.com/playlist?list=PL8fK_R8Bd4mh8__zjWzwpDiNw7zRl_Zi-"
        >
          Плейлист по хукам от Ayub Begimkulov
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/playlist?list=PL8fK_R8Bd4mgLWsX5oBRyqYcK5ad0-Uyf"
        >
          Старый плейлист по хукам от Ayub Begimkulov
        </a>
        <a
          target="_blank"
          href="https://docs.google.com/presentation/d/1Fuelp86rXLbzL5z2chnPagrMsyyENZ6YgCjieuoLMPk/edit#slide=id.g275f8c0ddb3_0_83"
        >
          Презентация
        </a>
      </div>
    </div>
  );
};
