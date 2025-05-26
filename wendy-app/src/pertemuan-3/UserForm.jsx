import InputField from "./components/InputField";
import { useState } from "react";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        Nama: "",
        Email: "",
        Tanggal_Lahir: ""

    });
    return (
          <div>
          <InputField label="Nama" type="text" placeholder="Silahkan ketik Nama..." value={formData.name}
                onChange={(value) => handleChange("name", value)}/>
          
          
          <InputField label="Email" type="email" placeholder="Silahkan ketik EMail..."/>
  
          <InputField label="Tanggal Lahir" type="date" />
          </div>

    );
  }