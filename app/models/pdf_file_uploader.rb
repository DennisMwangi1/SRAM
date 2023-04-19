class PdfFileUploader < CarrierWave::Uploader::Base
    storage :file
  
    def store_dir
      "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model}"
    end
  
    def extension_allowlist
      %w[pdf]
    end
  end
  