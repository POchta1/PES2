import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { formatPhoneNumber } from "@/lib/utils";

const contactFormSchema = z.object({
  studentName: z.string().min(1, "Имя обязательно"),
  grade: z.string().min(1, "Выберите класс"),
  parentPhone: z.string().min(1, "Телефон обязателен"),
  email: z.string().email("Неверный email").optional().or(z.literal("")),
  goal: z.string().min(1, "Выберите цель обучения"),
  message: z.string().optional(),
  agreement: z.boolean().refine((val) => val === true, "Необходимо согласие на обработку данных")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [phoneValue, setPhoneValue] = useState("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      studentName: "",
      grade: "",
      parentPhone: "",
      email: "",
      goal: "",
      message: "",
      agreement: false
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: Omit<ContactFormData, 'agreement'>) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Заявка отправлена!",
        description: "Я свяжусь с вами в ближайшее время."
      });
      form.reset();
      setPhoneValue("");
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    const { agreement, ...formData } = data;
    contactMutation.mutate(formData);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneValue(formatted);
    form.setValue("parentPhone", formatted);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-primary mb-6">Связаться со мной</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Готовы начать путь к успеху? Запишитесь на <span className="font-semibold text-primary">бесплатный пробный урок</span> или задайте интересующие вопросы
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="font-bold text-2xl mb-6">Записаться на пробный урок</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя ученика *</label>
                  <Input 
                    {...form.register("studentName")}
                    className={form.formState.errors.studentName ? "border-red-500" : ""}
                  />
                  {form.formState.errors.studentName && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.studentName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Класс *</label>
                  <Select onValueChange={(value) => form.setValue("grade", value)}>
                    <SelectTrigger className={form.formState.errors.grade ? "border-red-500" : ""}>
                      <SelectValue placeholder="Выберите класс" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 класс</SelectItem>
                      <SelectItem value="6">6 класс</SelectItem>
                      <SelectItem value="7">7 класс</SelectItem>
                      <SelectItem value="8">8 класс</SelectItem>
                      <SelectItem value="9">9 класс</SelectItem>
                      <SelectItem value="10">10 класс</SelectItem>
                      <SelectItem value="11">11 класс</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.grade && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.grade.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Телефон родителя *</label>
                <Input 
                  type="tel"
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__"
                  className={form.formState.errors.parentPhone ? "border-red-500" : ""}
                />
                {form.formState.errors.parentPhone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.parentPhone.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  {...form.register("email")}
                  className={form.formState.errors.email ? "border-red-500" : ""}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Цель обучения *</label>
                <Select onValueChange={(value) => form.setValue("goal", value)}>
                  <SelectTrigger className={form.formState.errors.goal ? "border-red-500" : ""}>
                    <SelectValue placeholder="Выберите цель" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ege">Подготовка к ЕГЭ</SelectItem>
                    <SelectItem value="oge">Подготовка к ОГЭ</SelectItem>
                    <SelectItem value="school">Улучшение школьных оценок</SelectItem>
                    <SelectItem value="olimpiad">Подготовка к олимпиадам</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.goal && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.goal.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                <Textarea 
                  {...form.register("message")}
                  rows={4}
                  placeholder="Расскажите о текущем уровне знаний, проблемных темах или других важных деталях"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="agreement"
                  checked={form.watch("agreement")}
                  onCheckedChange={(checked) => form.setValue("agreement", checked as boolean)}
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  Согласен на обработку персональных данных
                </label>
              </div>
              {form.formState.errors.agreement && (
                <p className="text-red-500 text-sm">{form.formState.errors.agreement.message}</p>
              )}
              
              <Button 
                type="submit" 
                className="w-full btn-primary text-lg py-4" 
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Отправка..." : "Записаться на пробный урок"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-phone text-primary mr-4"></i>
                  <div>
                    <p className="font-medium">+7 (999) 123-45-67</p>
                    <p className="text-sm text-gray-600">Звонки принимаю с 9:00 до 21:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-primary mr-4"></i>
                  <div>
                    <p className="font-medium">anna.petrova.math@email.com</p>
                    <p className="text-sm text-gray-600">Отвечаю в течение 2-х часов</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-primary mr-4"></i>
                  <div>
                    <p className="font-medium">Москва, район Сокольники</p>
                    <p className="text-sm text-gray-600">Выезд к ученику или онлайн</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Instant Messaging */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">Быстрая связь</h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/79991234567?text=Здравствуйте! Интересует обучение математике."
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp text-2xl text-green-500 mr-4"></i>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-gray-600">Быстрое получение ответа</p>
                  </div>
                </a>
                <a 
                  href="https://t.me/annapetrovamath"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-telegram text-2xl text-blue-500 mr-4"></i>
                  <div>
                    <p className="font-medium">Telegram</p>
                    <p className="text-sm text-gray-600">Удобный формат общения</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Schedule */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">График работы</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span className="font-medium">15:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота - Воскресенье</span>
                  <span className="font-medium">10:00 - 18:00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <p className="text-sm text-gray-600">
                    <i className="fas fa-clock text-primary mr-2"></i>
                    Свободное время для консультаций: ежедневно 12:00-13:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
