import React, { useState } from "react";
import "./css/rating.css";
import { Rating as RatingStar } from "react-simple-star-rating";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Rating = () => {
    const [rating, setRating] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const titlesAndIds = [
        {
            title: "الأمن",
            values: [
                { title: "أعضاء هيئة التدريس", id: "facultyMembers" },
                { title: "الأنشطة والفعاليات", id: "activities" },
                { title: "إشراك الطلاب في نشاطات", id: "studient-activities" },
                { title: "الأمن", id: "security-services" },
                { title: " الرسوم المالية", id: "inancialCharges" },
            ],
        },
        {
            title: "الأكاديمية ",
            values: [
                { title: "التقييم الاكاديمي", id: "Courses" },
                { title: "المقررات الدراسية", id: "Lectures" },
                { title: "المحاضرات", id: "TeachingStaff" },
            ],
        },
        // { title: 'تقييم الخدمة', id: 'security' },
        // { title: 'الاستجابه لاحتياجات الطلاب', id: 'responding-students' },
        // { title: 'تنسيق نزولات ميدانيه للتدريب', id: 'coordinating-field-trips-training' },
        // { title: 'تاهيل الطلاب لسوق العمل', id: 'preparing-students-labor-market' },
        // { title: 'تقييم مالي', id: 'financial-evaluation' },
        // { title: 'الرحلات', id: 'trips' },
        // { title: 'المسابقات', id: 'contests' }
    ];
    const handleRating = (rate) => {
        setRating(rate);
    };
    const onPointerEnter = (event) => console.log(event, "Enter");
    const onPointerLeave = () => console.log("Leave");
    const onPointerMove = (value, index) => console.log(value, index);
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/save-rating', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rating),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data);
            handleClose(); // Close the modal after successful submission
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };
    
    return (
        <>
            <div className="section-title">قيـَم الجامعـة</div>
            <div id="ratings-container">
                {titlesAndIds.map(({ title, values }) => (
                    <div key={title} className="rating-section">
                        <h3 className="section-title">{title}</h3>
                        {values.map(({ title, id }) => (
                            <div key={id} className="rating-item">
                                <div className="rating-title">{title}</div>
                                <div id={id} className="stars">
                                    <RatingStar
                                        onClick={handleRating}
                                        onPointerEnter={onPointerEnter}
                                        onPointerLeave={onPointerLeave}
                                        onPointerMove={onPointerMove}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="button-save">
                <Button className="open-modal" onClick={handleShow} type="button">
                    حفظ التقييم
                </Button>
            </div>
           

            <Modal
                aria-labelledby="example-modal-sizes-title-sm"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header
                    style={{width:'100%', display: "flex", justifyContent: "space-between" }}
                    closeButton
                    className=""
                >
                    <Modal.Title style={{flex:1,flexDirection:'column-reverse'}} id="example-modal-sizes-title-sm">
                        هل تريد الحفظ
                    </Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        إلغاء
                    </Button>
                    <Button  variant="primary" onClick={handleSubmit}>
                        حفظ التفييرات 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Rating;
