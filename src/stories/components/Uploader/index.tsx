import React, { useState } from "react";

export interface UploaderProps {
  /**
   * URL do servidor para upload de arquivos
   */
  uploadUrl: string;
  /**
   * Função para lidar com o upload de arquivo
   */
  onUpload: (file: File) => void;
  /**
   * Função para lidar com erros de upload
   */
  onError: (error: Error) => void;
  /**
   * Texto do botão de upload
   */
  buttonText: string;
  /**
   * Classe CSS para o botão de upload
   */
  buttonClass: string;
  /**
   * Estilos personalizados para o componente
   */
  styles?: {
    container?: React.CSSProperties;
    label?: React.CSSProperties;
    button?: React.CSSProperties;
  };
  /**
   * Tipos de arquivos permitidos
   */
  acceptedFileTypes?: string;
}

export const Uploader: React.FC<UploaderProps> = ({
  uploadUrl,
  onUpload,
  onError,
  buttonText,
  buttonClass,
  styles,
  acceptedFileTypes,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setFile(file);
    setFileName(file.name);
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    fetch(uploadUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        onUpload(file);
        setUploading(false);
      })
      .catch((error) => {
        onError(error);
        setError(error);
        setUploading(false);
      });
  };

  return (
    <div
      className="flex flex-col items-center p-4 bg-white rounded shadow-md"
      style={styles?.container}
    >
      <input
        type="file"
        id="file"
        onChange={handleFileChange}
        disabled={uploading}
        accept={acceptedFileTypes}
        style={{ display: "none" }}
      />
      <label
        className="flex items-center justify-center w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
        htmlFor="file"
        style={styles?.label}
      >
        {fileName ? fileName : "Selecione um arquivo"}
      </label>
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`bg-${buttonClass} hover:bg-${buttonClass}-dark text-white font-bold py-2 px-4 rounded ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
        style={styles?.button}
      >
        {buttonText}
      </button>
      {uploading && <p className="text-gray-500">Uploading...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
